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
@TableName("ycan_authorize")
public class AuthorizeEntity {

    /**
     * ID
     */
	private Long id;
    /**
     * 设备机器码
     */
	private String machineCode;
    /**
     * 创建时间
     */
	private Date createDate;
    /**
     * 到期时间
     */
	private Date expiration;
    /**
     * 项目包名
     */
	private String projectPackage;
    /**
     * 用户ID
     */
	private Long userId;
    /**
     * 备注
     */
	private String remark;
    /**
     * 产品ID
     */
	private String productId;
    /**
     * 状态  0：停用    1：正常
     */
	private Integer status;
}