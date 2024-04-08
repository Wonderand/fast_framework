package io.renren.modules.authorize.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
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
public class AuthorizeDTO implements Serializable {
    private static final long serialVersionUID = 1L;

	@ApiModelProperty(value = "ID")
	private Long id;

	@ApiModelProperty(value = "设备机器码")
	private String machineCode;

	@ApiModelProperty(value = "创建时间")
	private Date createDate;

	@ApiModelProperty(value = "到期时间")
	@JsonFormat(pattern = "yyyy-MM-dd")
	private Date expiration;

	@ApiModelProperty(value = "项目包名")
	private String projectPackage;

	@ApiModelProperty(value = "用户ID")
	private Long userId;

	@ApiModelProperty(value = "备注")
	private String remark;

	@ApiModelProperty(value = "产品ID")
	private String productId;

	@ApiModelProperty(value = "状态  0：停用    1：正常")
	private Integer status;


}