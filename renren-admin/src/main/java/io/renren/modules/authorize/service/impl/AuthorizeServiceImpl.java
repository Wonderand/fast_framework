package io.renren.modules.authorize.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import io.renren.common.service.impl.CrudServiceImpl;
import io.renren.modules.authorize.dao.AuthorizeDao;
import io.renren.modules.authorize.dto.AuthorizeDTO;
import io.renren.modules.authorize.entity.AuthorizeEntity;
import io.renren.modules.authorize.service.AuthorizeService;
import cn.hutool.core.util.StrUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Map;

/**
 * ${comments}
 *
 * @author hzr gmzhirong@gmail.com
 * @since 1.0.0 2024-03-19
 */
@Service
public class AuthorizeServiceImpl extends CrudServiceImpl<AuthorizeDao, AuthorizeEntity, AuthorizeDTO> implements AuthorizeService {

    @Autowired
    private AuthorizeDao authorizeDao;
    @Override
    public QueryWrapper<AuthorizeEntity> getWrapper(Map<String, Object> params){
        String id = (String)params.get("id");

        QueryWrapper<AuthorizeEntity> wrapper = new QueryWrapper<>();
        wrapper.eq(StrUtil.isNotBlank(id), "id", id);

        return wrapper;
    }


    @Override
    public int selectCountByUserIdAndProductId(Long userId, String productId) {
        return authorizeDao.selectCountByUserIdAndProductId(userId, productId);
    }
}