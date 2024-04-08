<template>
  <el-dialog v-model="visible" :title="!dataForm.id ? '新增' : '修改'" :close-on-click-modal="false"
             :close-on-press-escape="false">
    <el-form :model="dataForm" :rules="rules" ref="dataFormRef" @keyup.enter="dataFormSubmitHandle()"
             label-width="120px">
      <el-form-item label="设备机器码" prop="machineCode">
        <el-input v-model="dataForm.machineCode" placeholder="设备机器码"></el-input>
      </el-form-item>
      <el-form-item label="到期时间：">
        <el-date-picker
          type="date"
          placeholder="选择日期"
          v-model="dataForm.expiration"
          value-format="YYYY-MM-DD">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="项目包名" prop="projectPackage">
        <el-input v-model="dataForm.projectPackage" placeholder="项目包名"></el-input>
      </el-form-item>
<!--      <el-form-item label="用户ID" prop="userId">-->
<!--        <el-input v-model="dataForm.userId" placeholder="用户ID"></el-input>-->
<!--      </el-form-item>-->

      <el-form-item label="用户ID" prop="userId">
        <el-select v-model="dataForm.userId" placeholder="用户ID" style="width: 240px">
          <el-option
            v-for="item in productUser"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>

      <el-form-item label="备注" prop="remark">
        <el-input v-model="dataForm.remark" placeholder="备注"></el-input>
      </el-form-item>

      <el-form-item label="产品ID" prop="productId">
        <el-select v-model="dataForm.productId" placeholder="选择产品" style="width: 240px">
          <el-option
            v-for="item in product"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="产品ID" prop="productId" v-if="false">
        <el-input v-model="dataForm.productId" placeholder="产品ID"></el-input>
      </el-form-item>
<!--      <el-form-item label="状态  0：停用    1：正常" prop="status">-->
<!--        <el-input v-model="dataForm.status" placeholder="状态  0：停用    1：正常"></el-input>-->
<!--      </el-form-item>-->
    </el-form>
    <template #footer>
      <el-button @click="visible = false">取消</el-button>
      <el-button type="primary" @click="dataFormSubmitHandle()">确定</el-button>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import {reactive, ref} from "vue";
import baseService from "@/service/baseService";
import {ElMessage} from "element-plus";

const emit = defineEmits(["refreshDataList"]);

const visible = ref(false);
const dataFormRef = ref();

const product = []

const productUser: { value: any; label: any; }[] = []

const dataForm = reactive({
  id: '',
  machineCode: '',
  createDate: '',
  expiration: '',
  projectPackage: '',
  userId: '',
  remark: '',
  productId: '',
  status: '1'
});

const rules = ref({
  machineCode: [
    {required: true, message: '必填项不能为空', trigger: 'blur'}
  ],
  expiration: [
    {required: true, message: '必填项不能为空', trigger: 'blur'}
  ],
  projectPackage: [
    {required: true, message: '必填项不能为空', trigger: 'blur'}
  ],
  userId: [
    {required: true, message: '必填项不能为空', trigger: 'blur'}
  ],
  remark: [
    {required: true, message: '必填项不能为空', trigger: 'blur'}
  ],
  productId: [
    {required: true, message: '必填项不能为空', trigger: 'blur'}
  ],
  status: [
    {required: true, message: '必填项不能为空', trigger: 'blur'}
  ]
});

const init = (id?: number) => {
  visible.value = true;
  dataForm.id = "";

  // 重置表单数据
  if (dataFormRef.value) {
    dataFormRef.value.resetFields();
  }

  if (id) {
    getInfo(id);
  }
  baseService.get("/authorize/product/list").then((res) => {
    product.length = 0;
    res.data.forEach((item: any) => {
      product.push({
        value: item.id,
        label: item.productType
      })
    })
  });

  baseService.get("/sys/user/list").then((res) => {
    productUser.length = 0;
    res.data.forEach((item: any) => {
      productUser.push({
        value: item.id,
        label: item.username
      })
    })
    console.log(productUser)
  });
};

// 获取信息
const getInfo = (id: number) => {
  baseService.get("/authorize/authorize/" + id).then((res) => {
    console.log(res)
    Object.assign(dataForm, res.data);
  });
};

// 表单提交
const dataFormSubmitHandle = () => {
  console.log(dataForm)
  dataFormRef.value.validate((valid: boolean) => {
    if (!valid) {
      return false;
    }

    (!dataForm.id ? baseService.post : baseService.put)("/authorize/authorize", dataForm).then((res) => {
      ElMessage.success({
        message: '成功',
        duration: 500,
        onClose: () => {
          visible.value = false;
          emit("refreshDataList");
        }
      });
    });
  });
};

defineExpose({
  init
});
</script>
