import React, { useEffect } from "react";
import { useAuth } from "../../hooks/useAuth";
import { LoadingSpinner } from "../loadingSpinner";

interface IProps {
    code: string | null;
}

export const Dashboard: React.FC<IProps> = (code: IProps) => {
    const accessToken = useAuth(code);

    useEffect(() => {
        if (!accessToken) {
            <LoadingSpinner />
        }
    }, [accessToken])

    var test1 = <h1>Access token created</h1>
    var test2 = <h1>Access token not created</h1>

    return (
        <div>
            {accessToken ? test1 : test2}
        </div>
    )
}