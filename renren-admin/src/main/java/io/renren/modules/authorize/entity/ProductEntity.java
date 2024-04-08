package io.renren.modules.authorize.entity;

import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;

import java.util.Date;

/**
 * ${comments}
 *
 * @author hzr gmzhirong@gmail.com
 * @since 1.0.0 2024-03-19
 */
@Data
@TableName("ycan_product")
public class ProductEntity {

    /**
     * $column.comments
     */
	private Long id;
    /**
     * 产品类型
     */
	private String productType;
    /**
     * 授权总数量
     */
	private Long licenseQuantity;
    /**
     * 授权用户数量
     */
	private Long authorizedUser;
    /**
     * 备注
     */
	private String remark;
    /**
     * 创建时间
     */
	private Date createDate;
}