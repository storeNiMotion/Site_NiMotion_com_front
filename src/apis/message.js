//封装在线留言的接口函数
import httpInstance from "@/utils/http"

export const messageAPI = ({ name, phone, email, content }) => {
    return httpInstance({
        url: '/api/v2/message/list/',
        method: 'POST',
        data: {
            company,
            name,
            phone,
            email,
            content
        }
    })
}