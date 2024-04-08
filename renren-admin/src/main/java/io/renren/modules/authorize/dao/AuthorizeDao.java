package io.renren.modules.authorize.dao;

import io.renren.common.dao.BaseDao;
import io.renren.modules.authorize.entity.AuthorizeEntity;
import io.swagger.models.auth.In;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

/**
 * ${comments}
 *
 * @author hzr gmzhirong@gmail.com
 * @since 1.0.0 2024-03-19
 */
@Mapper
public interface AuthorizeDao extends BaseDao<AuthorizeEntity> {
    int selectCountByUserIdAndProductId(@Param("userId") Long userId, @Param("productId") String productId);
}