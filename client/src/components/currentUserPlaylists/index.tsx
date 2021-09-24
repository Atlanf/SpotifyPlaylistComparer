import React, { useEffect, useState } from "react";
import { AuthorizedRequestSender } from "../../shared/helpers/authorizedRequestSender";
import { getCurrentUserPlaylistsPreview } from "./utils";

export const CurrentUserPlaylists: React.FC = () => {
    let sender = new AuthorizedRequestSender();
    sender.sendGet(getCurrentUserPlaylistsPreview, "some test uri", 1, "2", {a: 3});
    return (
        <div>

        </div>
    )
}