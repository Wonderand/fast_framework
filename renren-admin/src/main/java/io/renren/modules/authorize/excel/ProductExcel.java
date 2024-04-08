package io.renren.modules.authorize.excel;

import com.alibaba.excel.annotation.ExcelProperty;
import com.alibaba.excel.annotation.write.style.ColumnWidth;
import com.alibaba.excel.annotation.write.style.ContentRowHeight;
import com.alibaba.excel.annotation.write.style.HeadRowHeight;
import lombok.Data;

import java.util.Date;

/**
 * ${comments}
 *
 * @author hzr gmzhirong@gmail.com
 * @since 1.0.0 2024-03-19
 */
@Data
public class ProductExcel {
    @ExcelProperty(value = "")
    private Long id;
    @ExcelProperty(value = "产品类型")
    private String productType;
    @ExcelProperty(value = "授权总数量")
    private Long licenseQuantity;
    @ExcelProperty(value = "授权用户数量")
    private Long authorizedUser;
    @ExcelProperty(value = "备注")
    private String remark;
    @ExcelProperty(value = "创建时间")
    private Date createDate;

}