package io.renren.modules.authorize.service;

import io.renren.common.service.CrudService;
import io.renren.modules.authorize.dto.AuthorizeDTO;
import io.renren.modules.authorize.entity.AuthorizeEntity;

/**
 * ${comments}
 *
 * @author hzr gmzhirong@gmail.com
 * @since 1.0.0 2024-03-19
 */
public interface AuthorizeService extends CrudService<AuthorizeEntity, AuthorizeDTO> {
    int selectCountByUserIdAndProductId(Long userId, String productId);
}