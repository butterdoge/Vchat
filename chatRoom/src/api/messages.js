/**
 * Created by wyw on 2018/12/6.
 */
import fetch from './fetch';

export default {
    removeMessage(params) { //删除消息
        return fetch.post('v/mes/removeMessage', params);
    }
}