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

    return (
        <div>

        </div>
    )
}