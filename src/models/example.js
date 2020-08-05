import { getProductData } from "../services/product";

export default {
  namespace: "example",

  state: {
    data: [],
    pageSize: 10,
    current: 1,
    total: 100,
  },
  // 订阅
  subscriptions: {
    setup({ dispatch, history }) {
      // eslint-disable-line
    },
  },
  // 副作用
  effects: {
    // *fetch({ payload }, { call, put }) {
    //   // eslint-disable-line
    //   yield put({ type: "save" });
    // },
    // 获取列表数据
    *getProductData({ payload }, { call, put }) {
      // 11
      const res = yield call(getProductData, payload);
      yield put({ type: "getProductData", payload: res.data });
    },
  },

  reducers: {
    getProductData(state, action) {
      return { ...state, data: action.payload };
    },
  },
};
