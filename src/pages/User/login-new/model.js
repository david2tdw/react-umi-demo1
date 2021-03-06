import * as api from './service';
import { notification } from 'antd';
import { routerRedux } from 'dva';
import { encrypt } from '@/utils/CryptoJS';

export default {
  namespace: 'userLogin',
  state: {
    isError: false,
  },
  effects: {
    *login({ payload }, { call, put }) {
      const { password, ...rest } = payload;
      const { status } = yield call(api.login, {
        password: encrypt(password),
        ...rest,
      });
      if (status === 0) {
        console.log('xxxxxxx')
        sessionStorage.setItem('isLogin', true);
        yield put(routerRedux.push('/sys'));
      } else {
        yield put({
          type: 'save',
          payload: {
            isError: true,
          },
        });
        notification.error({
          message: '用户名或密码错误，请重新登录。',
        });
      }
    },
  },
  reducers: {
    save(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
};
