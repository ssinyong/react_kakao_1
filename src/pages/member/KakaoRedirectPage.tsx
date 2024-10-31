import {useSearchParams} from "react-router-dom";
import {useEffect} from "react";
import {getAccessToken, getMemberWithAccessToken} from "../../api/kakaoAPI.ts";

//손대기
function KakaoRedirectPage() {

    const [searchParams] = useSearchParams()

    const authCode:string|null = searchParams.get("code")

    useEffect(() => {

        if(authCode != null){

        getAccessToken(authCode).then(accessToken => {

            console.log(accessToken)
            getMemberWithAccessToken(accessToken).then(result => {
                console.log("======================")
                console.log(result)
            })
        })
      }//end if

    },[authCode])


    return (
        <div>
            <div>Kakao Login Redirect</div>
            <div>{authCode}</div>
        </div>
    );
}

export default KakaoRedirectPage;