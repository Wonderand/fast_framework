package io.renren.modules.authorize.dto;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import java.io.Serializable;
import java.util.Date;


/**
 * ${comments}
 *
 * @author hzr gmzhirong@gmail.com
 * @since 1.0.0 2024-03-19
 */
@Data
@ApiModel(value = "${comments}")
public class ProductDTO implements Serializable {
    private static final long serialVersionUID = 1L;

	@ApiModelProperty(value = "ID")
	private Long id;

	@ApiModelProperty(value = "产品类型")
	private String productType;

	@ApiModelProperty(value = "授权总数量")
	private Long licenseQuantity;

	@ApiModelProperty(value = "授权用户数量")
	private Long authorizedUser;

	@ApiModelProperty(value = "备注")
	private String remark;

	@ApiModelProperty(value = "创建时间")
	private Date createDate;


}