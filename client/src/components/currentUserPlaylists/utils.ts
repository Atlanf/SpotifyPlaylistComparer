import axios from "axios";
import {} from "../../shared/interface";

export const getCurrentUserPlaylistsPreview = (uri: string, args: any[]) => {
    console.log(`On URI (${uri}) these params were sent:`);
    console.log(args[0]);
    console.log(args[1]);
    console.log(args[2]);
}