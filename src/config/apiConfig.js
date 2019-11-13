// 定义api接口方便接口更改
// 定义图片地址
export const imgUrl = 'https://meizi.manogue.com.cn/static/wap';
// 本地接口
const localApi = 'http://localhost:8888';
// 线上测试接口
const networkApi = 'http://meizi.pingbbs.com';
// 线上正式接口
const formalNetworkApi = 'https://meizi.manogue.com.cn';
// 局域网接口
const lanApi = 'http://192.168.2.130/meizi';

/******************* v1 ******************* */
// 首页商品推荐
export const GET_MERCHANDISE_RECOMMENDATION = localApi+'/v1/goods/recommend';
// 商品评价
export const GET_GOODS_COMMENT = localApi + '/v1/goods/comment_list';
// 添加收货地址
export const POST_ADDRESS_FORM = localApi + '/v1/address/address_form';
// 删除收获地址
export const POST_ADDRESS_DELETE = localApi + '/v1/address/delete';
// 设置默认地址
export const POST_SET_DEFAULT = localApi + '/v1/address/set_default';

/******************* v4 ******************* */
// 控区控价信息列表
export const POST_BRAND_LIST = localApi+'/v4/Brands/index';
// 查询品牌
export const POST_QUERY_BRAND = localApi+'/v4/goods/brand_list';
// 查询分类
export const POST_QUERY_CLASSIFICATION = localApi+'/v4/goods/cate_list';

/******************* v5 ******************* */
// 用户登录
export const POST_USER_LOGIN = localApi + '/v5/login';
// 搜索页面产品信息
export const POST_BRAND_LIBRARY_QUERY = localApi + '/v5/goods_list';
// 商品详情
export const GET_GOODS_INFO = localApi + '/v5/goods_info';
// 首页数据
export const GET_INDEX = localApi + '/v5/index';
// 用户订单
export const USER_ORDER = localApi + '/v5/user_order';
// 退出登录
export const LOGIN_OUT = localApi + '/v5/loginout';
// 订单状态
export const ORDER_STATUS = localApi + '/v5/order_status';
// 保存到购物车
export const POST_SAVE_CART = localApi + '/v5/save_cart';
// 获取购物车数据
export const GET_GOODS_CART = localApi + '/v5/goods_cart';
// 删除购物车产品
export const GET_CART_DEL = localApi + '/v5/cart_del';
// 购物车选中状态
export const POST_CART_CHECK = localApi + '/v5/cart_check';
// 订单提交
export const ORDER_COMMIT = localApi + '/v5/order_commit';
// 订单页面信息
export const GET_SHOW_ORDER_COMMIT = localApi + '/v5/show_order_commit';
// 获取城市列表
export const POST_GET_CITY = localApi +  '/v5/get_city';
// 获取地址列表
export const GET_SHOW_ADDRESS = localApi + '/v5/show_address';
// 编辑地址
export const GET_FIND_ADRESS = localApi + '/v5/find_adress';
