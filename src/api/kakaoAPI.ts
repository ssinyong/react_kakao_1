


const rest_api_key = '511377374feace2ffb7c883960caf108'

const redirect_uri = 'http://localhost:5173/member/kakao'

const auth_code_path = `https://kauth.kakao.com/oauth/authorize`

export const getKakaoLoginLink = () => {

    const kakaoURL = `${auth_code_path}?client_id=${rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`
    
    return kakaoURL
}