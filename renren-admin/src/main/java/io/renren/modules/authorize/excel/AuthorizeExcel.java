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
public class AuthorizeExcel {
    @ExcelProperty(value = "ID")
    private Long id;
    @ExcelProperty(value = "设备机器码")
    private String machineCode;
    @ExcelProperty(value = "创建时间")
    private Date createDate;
    @ExcelProperty(value = "到期时间")
    private Date expiration;
    @ExcelProperty(value = "项目包名")
    private String projectPackage;
    @ExcelProperty(value = "用户ID")
    private Long userId;
    @ExcelProperty(value = "备注")
    private String remark;
    @ExcelProperty(value = "产品ID")
    private String productId;
    @ExcelProperty(value = "状态  0：停用    1：正常")
    private Integer status;

}