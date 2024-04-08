package io.renren.modules.authorize.controller;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import io.renren.common.annotation.LogOperation;
import io.renren.common.constant.Constant;
import io.renren.common.page.PageData;
import io.renren.common.utils.ExcelUtils;
import io.renren.common.utils.Result;
import io.renren.common.validator.AssertUtils;
import io.renren.common.validator.ValidatorUtils;
import io.renren.common.validator.group.AddGroup;
import io.renren.common.validator.group.DefaultGroup;
import io.renren.common.validator.group.UpdateGroup;
import io.renren.modules.authorize.dto.AuthorizeDTO;
import io.renren.modules.authorize.dto.ProductDTO;
import io.renren.modules.authorize.excel.AuthorizeExcel;
import io.renren.modules.authorize.service.AuthorizeService;
import io.renren.modules.authorize.service.ProductService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiImplicitParams;
import io.swagger.annotations.ApiOperation;
import org.apache.shiro.authz.annotation.RequiresPermissions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import springfox.documentation.annotations.ApiIgnore;

import javax.servlet.http.HttpServletResponse;
import java.util.Date;
import java.util.List;
import java.util.Map;


/**
 * ${comments}
 *
 * @author hzr gmzhirong@gmail.com
 * @since 1.0.0 2024-03-19
 */
@RestController
@RequestMapping("authorize/authorize")
@Api(tags = "授权管理")
public class AuthorizeController {
    @Autowired
    private AuthorizeService authorizeService;

    @Autowired
    private ProductService productService;

    @GetMapping("page")
    @ApiOperation("分页")
    @ApiImplicitParams({
            @ApiImplicitParam(name = Constant.PAGE, value = "当前页码，从1开始", paramType = "query", required = true, dataType = "int"),
            @ApiImplicitParam(name = Constant.LIMIT, value = "每页显示记录数", paramType = "query", required = true, dataType = "int"),
            @ApiImplicitParam(name = Constant.ORDER_FIELD, value = "排序字段", paramType = "query", dataType = "String"),
            @ApiImplicitParam(name = Constant.ORDER, value = "排序方式，可选值(asc、desc)", paramType = "query", dataType = "String")
    })
    @RequiresPermissions("authorize:authorize:page")
    public Result<PageData<AuthorizeDTO>> page(@ApiIgnore @RequestParam Map<String, Object> params) {
        PageData<AuthorizeDTO> page = authorizeService.page(params);

        return new Result<PageData<AuthorizeDTO>>().ok(page);
    }

    @GetMapping("list")
    @ApiOperation("列表")
    @RequiresPermissions("authorize:authorize:list")
    public Result<List<AuthorizeDTO>> list(@ApiIgnore @RequestParam Map<String, Object> params) {
        List<AuthorizeDTO> data = authorizeService.list(params);

        return new Result<List<AuthorizeDTO>>().ok(data);
    }

    @GetMapping("{id}")
    @ApiOperation("信息")
    @RequiresPermissions("authorize:authorize:info")
    public Result<AuthorizeDTO> get(@PathVariable("id") Long id) {
        AuthorizeDTO data = authorizeService.get(id);

        return new Result<AuthorizeDTO>().ok(data);
    }

    @PostMapping
    @ApiOperation("保存")
    @LogOperation("保存")
    @RequiresPermissions("authorize:authorize:save")
    public Result save(@RequestBody AuthorizeDTO dto) {
        //效验数据
        ValidatorUtils.validateEntity(dto, AddGroup.class, DefaultGroup.class);
        dto.setCreateDate(new Date());
        authorizeService.save(dto);
        ProductDTO productDTO = new ProductDTO();
        productDTO.setId(Long.valueOf(dto.getProductId()));
        //查询产品信息
        ProductDTO product = productService.get(Long.valueOf(dto.getProductId()));
        //授权用户数量+1
        productDTO.setLicenseQuantity(product.getLicenseQuantity() + 1);
        int i = authorizeService.selectCountByUserIdAndProductId(dto.getUserId(), dto.getProductId());
        productDTO.setAuthorizedUser((long) i);
        productService.update(productDTO);
        return new Result();
    }

    @PutMapping
    @ApiOperation("修改")
    @LogOperation("修改")
    @RequiresPermissions("authorize:authorize:update")
    public Result update(@RequestBody AuthorizeDTO dto) {
        //效验数据
        ValidatorUtils.validateEntity(dto, UpdateGroup.class, DefaultGroup.class);

        authorizeService.update(dto);
        return new Result();
    }

    @DeleteMapping
    @ApiOperation("删除")
    @LogOperation("删除")
    @RequiresPermissions("authorize:authorize:delete")
    public Result delete(@RequestBody Long[] ids) {
        //效验数据
        AssertUtils.isArrayEmpty(ids, "id");

        authorizeService.delete(ids);

        return new Result();
    }

    @GetMapping("export")
    @ApiOperation("导出")
    @LogOperation("导出")
    @RequiresPermissions("authorize:authorize:export")
    public void export(@ApiIgnore @RequestParam Map<String, Object> params, HttpServletResponse response) throws Exception {
        List<AuthorizeDTO> list = authorizeService.list(params);

        ExcelUtils.exportExcelToTarget(response, null, "${comments}", list, AuthorizeExcel.class);
    }

}