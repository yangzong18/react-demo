import * as user from './action-type'

const saveUserInfo = (userInfo) => {
    return {
        type: user.SAVE_USERINFO,
        userInfo
    }
}

const saveAttrInfo = (dataType, value) => {
    return {
        type: user.SAVE_ATTRINFO,
        dataType,
        value
    }
}

const modifyUserInfo = (key, value) => {
    return {
        type: user.MODIFY_USERINFO,
        key,
        value
    }
}

export {
    saveUserInfo,
    saveAttrInfo,
    modifyUserInfo
}