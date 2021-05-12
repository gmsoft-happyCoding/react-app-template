/* eslint-disable */
import { AxiosRequestConfig } from 'axios';
import { Opts, WithPathOpts } from '../Opts.d';
import instance from './instance';
import { convertRESTAPI } from '../util';

/** 运维平台查询 */
function org_public_orgs_orgId_maintain_plats_get(opts: WithPathOpts) {
  return instance({
    method: 'get',
    url: convertRESTAPI('/org/public/orgs/{orgId}/maintain-plats', opts),
    opts: opts
  });
}

/** 组织重新分词 */
function org_public_org_texts_post(opts: Opts) {
  return instance({
    method: 'post',
    url:  '/org/public/org-texts',
    opts: opts
  });
}

/** 角色数量查询 */
function org_public_roles_counting_get(opts: Opts) {
  return instance({
    method: 'get',
    url:  '/org/public/roles/counting',
    opts: opts
  });
}

/** 角色查询 */
function org_public_roles_get(opts: Opts) {
  return instance({
    method: 'get',
    url:  '/org/public/roles',
    opts: opts
  });
}

/** 用户简介查询 */
function org_public_users_profiles_get(opts: Opts) {
  return instance({
    method: 'get',
    url:  '/org/public/users/profiles',
    opts: opts
  });
}

/** 资源库定位 */
function org_public_object_resource_get(opts: Opts) {
  return instance({
    method: 'get',
    url:  '/org/public/object-resource',
    opts: opts
  });
}

/** 单位移除 */
function org_public_orgs_orgId_delete(opts: WithPathOpts) {
  return instance({
    method: 'delete',
    url: convertRESTAPI('/org/public/orgs/{orgId}', opts),
    opts: opts
  });
}

/** 用户查询 */
function org_public_employees_counting_get(opts: Opts) {
  return instance({
    method: 'get',
    url:  '/org/public/employees/counting',
    opts: opts
  });
}

/** 政采云平台-用户手动映射推荐单位员工 */
function org_cloud_users_mapping_task_recommend_employees_get(opts: Opts) {
  return instance({
    method: 'get',
    url:  '/org/cloud-users/mapping-task/recommend-employees',
    opts: opts
  });
}

/** mockToken */
function org_oauth_token_post(opts: Opts) {
  return instance({
    method: 'post',
    url:  '/org/oauth/token',
    opts: opts
  });
}

/** mockGetOrg */
function org_zcy_open_api_user_v2_institutions_present_get(opts: Opts) {
  return instance({
    method: 'get',
    url:  '/org/zcy/open/api/user/v2/institutions/present',
    opts: opts
  });
}

/** mockGetUser */
function org_zcy_open_api_user_v2_operators_present_get(opts: Opts) {
  return instance({
    method: 'get',
    url:  '/org/zcy/open/api/user/v2/operators/present',
    opts: opts
  });
}

/** 政采云平台-用户手动映射创建 */
function org_cloud_users_mapping_task_patch(opts: Opts) {
  return instance({
    method: 'patch',
    url:  '/org/cloud-users/mapping-task',
    opts: opts
  });
}

/** 政采云平台-用户手动映射信息 */
function org_cloud_users_mapping_task_get(opts: Opts) {
  return instance({
    method: 'get',
    url:  '/org/cloud-users/mapping-task',
    opts: opts
  });
}

/** 变更单位成员身份信息 */
function org_public_employees_userId_put(opts: WithPathOpts) {
  return instance({
    method: 'put',
    url: convertRESTAPI('/org/public/employees/{userId}', opts),
    opts: opts
  });
}

/** 申请变更单位上级 */
function org_public_orgs_orgId_up_patch(opts: WithPathOpts) {
  return instance({
    method: 'patch',
    url: convertRESTAPI('/org/public/orgs/{orgId}/up', opts),
    opts: opts
  });
}

/** 单位简介查询 */
function org_public_orgs_profiles_get(opts: Opts) {
  return instance({
    method: 'get',
    url:  '/org/public/orgs/profiles',
    opts: opts
  });
}

/** 单位入库信息推荐 */
function org_public_org_reg_apply_recommendations_get(opts: Opts) {
  return instance({
    method: 'get',
    url:  '/org/public/org-reg-apply/recommendations',
    opts: opts
  });
}

/** 单位入库候选名单 */
function org_public_org_reg_apply_candidates_get(opts: Opts) {
  return instance({
    method: 'get',
    url:  '/org/public/org-reg-apply/candidates',
    opts: opts
  });
}

/** 获取单位简介 */
function org_public_orgs_profile_get(opts: Opts) {
  return instance({
    method: 'get',
    url:  '/org/public/orgs/profile',
    opts: opts
  });
}

/** 单位用户注册审核 */
function org_public_employee_reg_applies_applyId_patch(opts: WithPathOpts) {
  return instance({
    method: 'patch',
    url: convertRESTAPI('/org/public/employee-reg-applies/{applyId}', opts),
    opts: opts
  });
}

/** 单位成员excel导入(多单位) */
function org_public_employees_from_excel_multi_post(opts: Opts) {
  return instance({
    method: 'post',
    url:  '/org/public/employees/from-excel-multi',
    opts: opts
  });
}

/** 单位成员excel导入 */
function org_public_employees_from_excel_single_post(opts: Opts) {
  return instance({
    method: 'post',
    url:  '/org/public/employees/from-excel-single',
    opts: opts
  });
}

/** 查询用户导入结果 */
function org_public_employees_import_results_requestId_get(opts: WithPathOpts) {
  return instance({
    method: 'get',
    url: convertRESTAPI('/org/public/employees/import-results/{requestId}', opts),
    opts: opts
  });
}

/** 获取单位简介 */
function org_public_orgs_key_profile_get(opts: WithPathOpts) {
  return instance({
    method: 'get',
    url: convertRESTAPI('/org/public/orgs/{key}/profile', opts),
    opts: opts
  });
}

/** 查询资源库定义 */
function org_public_repo_resources_get(opts: Opts) {
  return instance({
    method: 'get',
    url:  '/org/public/repo-resources',
    opts: opts
  });
}

/** 变更用户基础信息 */
function org_public_users_userId_put(opts: WithPathOpts) {
  return instance({
    method: 'put',
    url: convertRESTAPI('/org/public/users/{userId}', opts),
    opts: opts
  });
}

/** 政采大平台-新增采购单位映射关系 */
function org_synchronizations_stock_mappings_post(opts: Opts) {
  return instance({
    method: 'post',
    url:  '/org/synchronizations/stock-mappings',
    opts: opts
  });
}

/** 政采大平台-修改采购单位映射关系 */
function org_synchronizations_stock_mappings_mappingId_put(opts: WithPathOpts) {
  return instance({
    method: 'put',
    url: convertRESTAPI('/org/synchronizations/stock-mappings/{mappingId}', opts),
    opts: opts
  });
}

/** 政采大平台-删除采购单位映射关系 */
function org_synchronizations_stock_mappings_mappingId_delete(opts: WithPathOpts) {
  return instance({
    method: 'delete',
    url: convertRESTAPI('/org/synchronizations/stock-mappings/{mappingId}', opts),
    opts: opts
  });
}

/** 政采大平台-当前已经启用的租户列表 */
function org_synchronizations_tenants_get(opts: Opts) {
  return instance({
    method: 'get',
    url:  '/org/synchronizations/tenants',
    opts: opts
  });
}

/** 处理同步申请 */
function org_synchronizations_id_post(opts: WithPathOpts) {
  return instance({
    method: 'post',
    url: convertRESTAPI('/org/synchronizations/{id}', opts),
    opts: opts
  });
}

/** 查询“我”单位系统角色成员 */
function org_system_role_members_get(opts: Opts) {
  return instance({
    method: 'get',
    url:  '/org/system-role-members',
    opts: opts
  });
}

/** 市级(浪潮)大平台单点登陆 */
function org_sj_sso_langchao_post(opts: Opts) {
  return instance({
    method: 'post',
    url:  '/org/sj/sso-langchao',
    opts: opts
  });
}

/** 市级(浪潮)大平台单点登陆（内部） */
function org_sj_sso_langchao_inner_get(opts: Opts) {
  return instance({
    method: 'get',
    url:  '/org/sj/sso-langchao-inner',
    opts: opts
  });
}

/** 市级(龙图)大平台单点登陆 */
function org_sj_sso_longtu_post(opts: Opts) {
  return instance({
    method: 'post',
    url:  '/org/sj/sso-longtu',
    opts: opts
  });
}

/** 待处理同步申请 */
function org_synchronizations_get(opts: Opts) {
  return instance({
    method: 'get',
    url:  '/org/synchronizations',
    opts: opts
  });
}

/** 政采大平台-新增单位用户映射关系 */
function org_synchronizations_employee_mappings_post(opts: Opts) {
  return instance({
    method: 'post',
    url:  '/org/synchronizations/employee-mappings',
    opts: opts
  });
}

/** 政采大平台-修改单位用户映射关系 */
function org_synchronizations_employee_mappings_mappingId_put(opts: WithPathOpts) {
  return instance({
    method: 'put',
    url: convertRESTAPI('/org/synchronizations/employee-mappings/{mappingId}', opts),
    opts: opts
  });
}

/** 政采大平台-删除单位用户映射关系 */
function org_synchronizations_employee_mappings_mappingId_delete(opts: WithPathOpts) {
  return instance({
    method: 'delete',
    url: convertRESTAPI('/org/synchronizations/employee-mappings/{mappingId}', opts),
    opts: opts
  });
}

/** 同步申请处理记录 */
function org_synchronizations_history_get(opts: Opts) {
  return instance({
    method: 'get',
    url:  '/org/synchronizations/history',
    opts: opts
  });
}

/** 3方映射关系查询 */
function org_synchronizations_mappings_get(opts: Opts) {
  return instance({
    method: 'get',
    url:  '/org/synchronizations/mappings',
    opts: opts
  });
}

/** 政采大平台-导入映射关系 */
function org_synchronizations_mappings_from_excel_post(opts: Opts) {
  return instance({
    method: 'post',
    url:  '/org/synchronizations/mappings/from-excel',
    opts: opts
  });
}

/** 屏蔽用户历史记录 */
function org_public_user_reg_apply_histories_historyId_delete(opts: WithPathOpts) {
  return instance({
    method: 'delete',
    url: convertRESTAPI('/org/public/user-reg-apply/histories/{historyId}', opts),
    opts: opts
  });
}

/** 用户信息查询 */
function org_public_users_get(opts: Opts) {
  return instance({
    method: 'get',
    url:  '/org/public/users',
    opts: opts
  });
}

/** 用户数量查询 */
function org_public_users_counting_get(opts: Opts) {
  return instance({
    method: 'get',
    url:  '/org/public/users/counting',
    opts: opts
  });
}

/** 设置用户默认登陆身份 */
function org_public_users_default_login_identity_post(opts: Opts) {
  return instance({
    method: 'post',
    url:  '/org/public/users/default-login-identity',
    opts: opts
  });
}

/** 单位成员excel导入(多单位) */
function org_public_users_from_excel_multi_post(opts: Opts) {
  return instance({
    method: 'post',
    url:  '/org/public/users/from-excel-multi',
    opts: opts
  });
}

/** 查询用户导入结果 */
function org_public_users_import_results_requestId_get(opts: WithPathOpts) {
  return instance({
    method: 'get',
    url: convertRESTAPI('/org/public/users/import-results/{requestId}', opts),
    opts: opts
  });
}

/** 获取用户简介 */
function org_public_users_profile_get(opts: Opts) {
  return instance({
    method: 'get',
    url:  '/org/public/users/profile',
    opts: opts
  });
}

/** 增加角色 */
function org_roles_post(opts: Opts) {
  return instance({
    method: 'post',
    url:  '/org/roles',
    opts: opts
  });
}

/** 增加角色(批量) */
function org_roles_batch_post(opts: Opts) {
  return instance({
    method: 'post',
    url:  '/org/roles/batch',
    opts: opts
  });
}

/** 沙区(龙图)大平台单点登陆 */
function org_shapingba_sso_post(opts: Opts) {
  return instance({
    method: 'post',
    url:  '/org/shapingba/sso',
    opts: opts
  });
}

/** 模拟大平台单点登陆验证 */
function org_shapingba_sso_verify_post(opts: Opts) {
  return instance({
    method: 'post',
    url:  '/org/shapingba/sso/verify',
    opts: opts
  });
}

/** 初始化单位 */
function org_public_stocks_post(opts: Opts) {
  return instance({
    method: 'post',
    url:  '/org/public/stocks',
    opts: opts
  });
}

/** 单位数量查询 */
function org_public_stocks_counting_get(opts: Opts) {
  return instance({
    method: 'get',
    url:  '/org/public/stocks/counting',
    opts: opts
  });
}

/** 获取单位 */
function org_public_stocks_orgId_get(opts: WithPathOpts) {
  return instance({
    method: 'get',
    url: convertRESTAPI('/org/public/stocks/{orgId}', opts),
    opts: opts
  });
}

/** 变更采购单位信息 */
function org_public_stocks_orgId_put(opts: WithPathOpts) {
  return instance({
    method: 'put',
    url: convertRESTAPI('/org/public/stocks/{orgId}', opts),
    opts: opts
  });
}

/** 系统角色定义 */
function org_public_system_role_definitions_get(opts: Opts) {
  return instance({
    method: 'get',
    url:  '/org/public/system-role-definitions',
    opts: opts
  });
}

/** 用户注册申请列表 */
function org_public_user_reg_applies_get(opts: Opts) {
  return instance({
    method: 'get',
    url:  '/org/public/user-reg-applies',
    opts: opts
  });
}

/** 删除注册 */
function org_public_user_reg_applies_applyId_delete(opts: WithPathOpts) {
  return instance({
    method: 'delete',
    url: convertRESTAPI('/org/public/user-reg-applies/{applyId}', opts),
    opts: opts
  });
}

/** 单位用户注册审核 */
function org_public_user_reg_applies_applyId_patch(opts: WithPathOpts) {
  return instance({
    method: 'patch',
    url: convertRESTAPI('/org/public/user-reg-applies/{applyId}', opts),
    opts: opts
  });
}

/** 注册申请数量查询 */
function org_public_user_reg_apply_counting_get(opts: Opts) {
  return instance({
    method: 'get',
    url:  '/org/public/user-reg-apply/counting',
    opts: opts
  });
}

/** 用户注册申请历史记录 */
function org_public_user_reg_apply_histories_get(opts: Opts) {
  return instance({
    method: 'get',
    url:  '/org/public/user-reg-apply/histories',
    opts: opts
  });
}

/** 获取注册草稿 */
function org_public_reg_apply_drafts_get(opts: Opts) {
  return instance({
    method: 'get',
    url:  '/org/public/reg-apply/drafts',
    opts: opts
  });
}

/** 保存注册草稿 */
function org_public_reg_apply_drafts_post(opts: Opts) {
  return instance({
    method: 'post',
    url:  '/org/public/reg-apply/drafts',
    opts: opts
  });
}

/** 查询可使用的资源库 */
function org_public_repo_resource_available_get(opts: Opts) {
  return instance({
    method: 'get',
    url:  '/org/public/repo-resource/available',
    opts: opts
  });
}

/** 采购单位注册 */
function org_public_stock_reg_applies_post(opts: Opts) {
  return instance({
    method: 'post',
    url:  '/org/public/stock-reg-applies',
    opts: opts
  });
}

/** 采购查询 */
function org_public_stocks_get(opts: Opts) {
  return instance({
    method: 'get',
    url:  '/org/public/stocks',
    opts: opts
  });
}

/** 变更供应商信息 */
function org_public_providers_orgId_put(opts: WithPathOpts) {
  return instance({
    method: 'put',
    url: convertRESTAPI('/org/public/providers/{orgId}', opts),
    opts: opts
  });
}

/** 单位通讯录查询 */
function org_public_orgs_get(opts: Opts) {
  return instance({
    method: 'get',
    url:  '/org/public/orgs',
    opts: opts
  });
}

/** 单位数量查询 */
function org_public_orgs_counting_get(opts: Opts) {
  return instance({
    method: 'get',
    url:  '/org/public/orgs/counting',
    opts: opts
  });
}

/** 变更单位基础信息 */
function org_public_orgs_orgId_put(opts: WithPathOpts) {
  return instance({
    method: 'put',
    url: convertRESTAPI('/org/public/orgs/{orgId}', opts),
    opts: opts
  });
}

/** 设置单位管理员 */
function org_public_orgs_orgId_admin_patch(opts: WithPathOpts) {
  return instance({
    method: 'patch',
    url: convertRESTAPI('/org/public/orgs/{orgId}/admin', opts),
    opts: opts
  });
}

/** 获取单位简介 */
function org_public_orgs_orgId_profile_get(opts: WithPathOpts) {
  return instance({
    method: 'get',
    url: convertRESTAPI('/org/public/orgs/{orgId}/profile', opts),
    opts: opts
  });
}

/** 供应商注册 */
function org_public_provider_reg_applies_post(opts: Opts) {
  return instance({
    method: 'post',
    url:  '/org/public/provider-reg-applies',
    opts: opts
  });
}

/** 单位查询 */
function org_public_providers_get(opts: Opts) {
  return instance({
    method: 'get',
    url:  '/org/public/providers',
    opts: opts
  });
}

/** 初始化单位 */
function org_public_providers_post(opts: Opts) {
  return instance({
    method: 'post',
    url:  '/org/public/providers',
    opts: opts
  });
}

/** 单位数量查询 */
function org_public_providers_counting_get(opts: Opts) {
  return instance({
    method: 'get',
    url:  '/org/public/providers/counting',
    opts: opts
  });
}

/** 获取单位 */
function org_public_providers_orgId_get(opts: WithPathOpts) {
  return instance({
    method: 'get',
    url: convertRESTAPI('/org/public/providers/{orgId}', opts),
    opts: opts
  });
}

/** 注册申请数量查询 */
function org_public_org_reg_apply_counting_get(opts: Opts) {
  return instance({
    method: 'get',
    url:  '/org/public/org-reg-apply/counting',
    opts: opts
  });
}

/** 单位注册申请历史记录 */
function org_public_org_reg_apply_histories_get(opts: Opts) {
  return instance({
    method: 'get',
    url:  '/org/public/org-reg-apply/histories',
    opts: opts
  });
}

/** 屏蔽历史记录 */
function org_public_org_reg_apply_histories_historyId_delete(opts: WithPathOpts) {
  return instance({
    method: 'delete',
    url: convertRESTAPI('/org/public/org-reg-apply/histories/{historyId}', opts),
    opts: opts
  });
}

/** 单位分词查询 */
function org_public_org_texts_get(opts: Opts) {
  return instance({
    method: 'get',
    url:  '/org/public/org-texts',
    opts: opts
  });
}

/** 清理所有分词数据 */
function org_public_org_texts_delete(opts: Opts) {
  return instance({
    method: 'delete',
    url:  '/org/public/org-texts',
    opts: opts
  });
}

/** 分词组织数量查询 */
function org_public_org_texts_counting_get(opts: Opts) {
  return instance({
    method: 'get',
    url:  '/org/public/org-texts/counting',
    opts: opts
  });
}

/** 变更申请查询 */
function org_public_org_update_applies_get(opts: Opts) {
  return instance({
    method: 'get',
    url:  '/org/public/org-update-applies',
    opts: opts
  });
}

/** 审核单位变更申请 */
function org_public_org_update_applies_applyId_patch(opts: WithPathOpts) {
  return instance({
    method: 'patch',
    url: convertRESTAPI('/org/public/org-update-applies/{applyId}', opts),
    opts: opts
  });
}

/** 变更申请数量 */
function org_public_org_update_apply_counting_get(opts: Opts) {
  return instance({
    method: 'get',
    url:  '/org/public/org-update-apply/counting',
    opts: opts
  });
}

/** 变更历史记录查询 */
function org_public_org_update_apply_histories_get(opts: Opts) {
  return instance({
    method: 'get',
    url:  '/org/public/org-update-apply/histories',
    opts: opts
  });
}

/** 获取“我”的单位信息问题 */
function org_public_me_check_org_info_get(opts: Opts) {
  return instance({
    method: 'get',
    url:  '/org/public/me/check-org-info',
    opts: opts
  });
}

/** 获取对象组织架构配置 */
function org_public_object_config_get(opts: Opts) {
  return instance({
    method: 'get',
    url:  '/org/public/object-config',
    opts: opts
  });
}

/** 保存对象组织架构配置 */
function org_public_object_config_post(opts: Opts) {
  return instance({
    method: 'post',
    url:  '/org/public/object-config',
    opts: opts
  });
}

/** 单位注册申请列表 */
function org_public_org_reg_applies_get(opts: Opts) {
  return instance({
    method: 'get',
    url:  '/org/public/org-reg-applies',
    opts: opts
  });
}

/** 删除注册 */
function org_public_org_reg_applies_applyId_delete(opts: WithPathOpts) {
  return instance({
    method: 'delete',
    url: convertRESTAPI('/org/public/org-reg-applies/{applyId}', opts),
    opts: opts
  });
}

/** 审核单位注册申请 */
function org_public_org_reg_applies_applyId_patch(opts: WithPathOpts) {
  return instance({
    method: 'patch',
    url: convertRESTAPI('/org/public/org-reg-applies/{applyId}', opts),
    opts: opts
  });
}

/** 单位用户注册 */
function org_public_employee_reg_applies_post(opts: Opts) {
  return instance({
    method: 'post',
    url:  '/org/public/employee-reg-applies',
    opts: opts
  });
}

/** 用户查询 */
function org_public_employees_get(opts: Opts) {
  return instance({
    method: 'get',
    url:  '/org/public/employees',
    opts: opts
  });
}

/** 获取用户 */
function org_public_employees_userId_get(opts: WithPathOpts) {
  return instance({
    method: 'get',
    url: convertRESTAPI('/org/public/employees/{userId}', opts),
    opts: opts
  });
}

/** 单位信息查询 */
function org_public_finances_get(opts: Opts) {
  return instance({
    method: 'get',
    url:  '/org/public/finances',
    opts: opts
  });
}

/** 初始化单位 */
function org_public_finances_post(opts: Opts) {
  return instance({
    method: 'post',
    url:  '/org/public/finances',
    opts: opts
  });
}

/** 单位数量查询 */
function org_public_finances_counting_get(opts: Opts) {
  return instance({
    method: 'get',
    url:  '/org/public/finances/counting',
    opts: opts
  });
}

/** 变更申请审核 */
function org_public_finances_update_applies_applyId_patch(opts: WithPathOpts) {
  return instance({
    method: 'patch',
    url: convertRESTAPI('/org/public/finances/update-applies/{applyId}', opts),
    opts: opts
  });
}

/** 获取单位 */
function org_public_finances_orgId_get(opts: WithPathOpts) {
  return instance({
    method: 'get',
    url: convertRESTAPI('/org/public/finances/{orgId}', opts),
    opts: opts
  });
}

/** 变更金融单位信息 */
function org_public_finances_orgId_put(opts: WithPathOpts) {
  return instance({
    method: 'put',
    url: convertRESTAPI('/org/public/finances/{orgId}', opts),
    opts: opts
  });
}

/** 标签查询 */
function org_public_labels_get(opts: Opts) {
  return instance({
    method: 'get',
    url:  '/org/public/labels',
    opts: opts
  });
}

/** 标签数量 */
function org_public_labels_counting_get(opts: Opts) {
  return instance({
    method: 'get',
    url:  '/org/public/labels/counting',
    opts: opts
  });
}

/** 单位查询 */
function org_public_agents_get(opts: Opts) {
  return instance({
    method: 'get',
    url:  '/org/public/agents',
    opts: opts
  });
}

/** 初始化单位 */
function org_public_agents_post(opts: Opts) {
  return instance({
    method: 'post',
    url:  '/org/public/agents',
    opts: opts
  });
}

/** 单位数量查询 */
function org_public_agents_counting_get(opts: Opts) {
  return instance({
    method: 'get',
    url:  '/org/public/agents/counting',
    opts: opts
  });
}

/** 获取单位 */
function org_public_agents_orgId_get(opts: WithPathOpts) {
  return instance({
    method: 'get',
    url: convertRESTAPI('/org/public/agents/{orgId}', opts),
    opts: opts
  });
}

/** 变更代理机构信息 */
function org_public_agents_orgId_put(opts: WithPathOpts) {
  return instance({
    method: 'put',
    url: convertRESTAPI('/org/public/agents/{orgId}', opts),
    opts: opts
  });
}

/** 单位查询 */
function org_public_approvals_get(opts: Opts) {
  return instance({
    method: 'get',
    url:  '/org/public/approvals',
    opts: opts
  });
}

/** 初始化单位 */
function org_public_approvals_post(opts: Opts) {
  return instance({
    method: 'post',
    url:  '/org/public/approvals',
    opts: opts
  });
}

/** 单位数量查询 */
function org_public_approvals_counting_get(opts: Opts) {
  return instance({
    method: 'get',
    url:  '/org/public/approvals/counting',
    opts: opts
  });
}

/** 获取单位 */
function org_public_approvals_orgId_get(opts: WithPathOpts) {
  return instance({
    method: 'get',
    url: convertRESTAPI('/org/public/approvals/{orgId}', opts),
    opts: opts
  });
}

/** 变更审批单位信息 */
function org_public_approvals_orgId_put(opts: WithPathOpts) {
  return instance({
    method: 'put',
    url: convertRESTAPI('/org/public/approvals/{orgId}', opts),
    opts: opts
  });
}

/** 模拟sj大平台单点登陆:获取用户 */
function org_gspidm_AccountResource_GetBind_post(opts: Opts) {
  return instance({
    method: 'post',
    url:  '/org/gspidm/AccountResource/GetBind',
    opts: opts
  });
}

/** 模拟sj大平台单点登陆:验证api账号 */
function org_gspidm_IdentityResource_VerifyIdentityAPI_post(opts: Opts) {
  return instance({
    method: 'post',
    url:  '/org/gspidm/IdentityResource/VerifyIdentityAPI',
    opts: opts
  });
}

/** 模拟sj大平台单点登陆:验证ssoToken */
function org_gspidm_IdentityResource_VerifySSOToken_post(opts: Opts) {
  return instance({
    method: 'post',
    url:  '/org/gspidm/IdentityResource/VerifySSOToken',
    opts: opts
  });
}

/** 代理机构注册 */
function org_public_agent_reg_applies_post(opts: Opts) {
  return instance({
    method: 'post',
    url:  '/org/public/agent-reg-applies',
    opts: opts
  });
}

export {
  org_public_orgs_orgId_maintain_plats_get,
  org_public_org_texts_post,
  org_public_roles_counting_get,
  org_public_roles_get,
  org_public_users_profiles_get,
  org_public_object_resource_get,
  org_public_orgs_orgId_delete,
  org_public_employees_counting_get,
  org_cloud_users_mapping_task_recommend_employees_get,
  org_oauth_token_post,
  org_zcy_open_api_user_v2_institutions_present_get,
  org_zcy_open_api_user_v2_operators_present_get,
  org_cloud_users_mapping_task_patch,
  org_cloud_users_mapping_task_get,
  org_public_employees_userId_put,
  org_public_orgs_orgId_up_patch,
  org_public_orgs_profiles_get,
  org_public_org_reg_apply_recommendations_get,
  org_public_org_reg_apply_candidates_get,
  org_public_orgs_profile_get,
  org_public_employee_reg_applies_applyId_patch,
  org_public_employees_from_excel_multi_post,
  org_public_employees_from_excel_single_post,
  org_public_employees_import_results_requestId_get,
  org_public_orgs_key_profile_get,
  org_public_repo_resources_get,
  org_public_users_userId_put,
  org_synchronizations_stock_mappings_post,
  org_synchronizations_stock_mappings_mappingId_put,
  org_synchronizations_stock_mappings_mappingId_delete,
  org_synchronizations_tenants_get,
  org_synchronizations_id_post,
  org_system_role_members_get,
  org_sj_sso_langchao_post,
  org_sj_sso_langchao_inner_get,
  org_sj_sso_longtu_post,
  org_synchronizations_get,
  org_synchronizations_employee_mappings_post,
  org_synchronizations_employee_mappings_mappingId_put,
  org_synchronizations_employee_mappings_mappingId_delete,
  org_synchronizations_history_get,
  org_synchronizations_mappings_get,
  org_synchronizations_mappings_from_excel_post,
  org_public_user_reg_apply_histories_historyId_delete,
  org_public_users_get,
  org_public_users_counting_get,
  org_public_users_default_login_identity_post,
  org_public_users_from_excel_multi_post,
  org_public_users_import_results_requestId_get,
  org_public_users_profile_get,
  org_roles_post,
  org_roles_batch_post,
  org_shapingba_sso_post,
  org_shapingba_sso_verify_post,
  org_public_stocks_post,
  org_public_stocks_counting_get,
  org_public_stocks_orgId_get,
  org_public_stocks_orgId_put,
  org_public_system_role_definitions_get,
  org_public_user_reg_applies_get,
  org_public_user_reg_applies_applyId_delete,
  org_public_user_reg_applies_applyId_patch,
  org_public_user_reg_apply_counting_get,
  org_public_user_reg_apply_histories_get,
  org_public_reg_apply_drafts_get,
  org_public_reg_apply_drafts_post,
  org_public_repo_resource_available_get,
  org_public_stock_reg_applies_post,
  org_public_stocks_get,
  org_public_providers_orgId_put,
  org_public_orgs_get,
  org_public_orgs_counting_get,
  org_public_orgs_orgId_put,
  org_public_orgs_orgId_admin_patch,
  org_public_orgs_orgId_profile_get,
  org_public_provider_reg_applies_post,
  org_public_providers_get,
  org_public_providers_post,
  org_public_providers_counting_get,
  org_public_providers_orgId_get,
  org_public_org_reg_apply_counting_get,
  org_public_org_reg_apply_histories_get,
  org_public_org_reg_apply_histories_historyId_delete,
  org_public_org_texts_get,
  org_public_org_texts_delete,
  org_public_org_texts_counting_get,
  org_public_org_update_applies_get,
  org_public_org_update_applies_applyId_patch,
  org_public_org_update_apply_counting_get,
  org_public_org_update_apply_histories_get,
  org_public_me_check_org_info_get,
  org_public_object_config_get,
  org_public_object_config_post,
  org_public_org_reg_applies_get,
  org_public_org_reg_applies_applyId_delete,
  org_public_org_reg_applies_applyId_patch,
  org_public_employee_reg_applies_post,
  org_public_employees_get,
  org_public_employees_userId_get,
  org_public_finances_get,
  org_public_finances_post,
  org_public_finances_counting_get,
  org_public_finances_update_applies_applyId_patch,
  org_public_finances_orgId_get,
  org_public_finances_orgId_put,
  org_public_labels_get,
  org_public_labels_counting_get,
  org_public_agents_get,
  org_public_agents_post,
  org_public_agents_counting_get,
  org_public_agents_orgId_get,
  org_public_agents_orgId_put,
  org_public_approvals_get,
  org_public_approvals_post,
  org_public_approvals_counting_get,
  org_public_approvals_orgId_get,
  org_public_approvals_orgId_put,
  org_gspidm_AccountResource_GetBind_post,
  org_gspidm_IdentityResource_VerifyIdentityAPI_post,
  org_gspidm_IdentityResource_VerifySSOToken_post,
  org_public_agent_reg_applies_post
};
