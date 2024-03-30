import axios from "axios";
import { refs, query, showLoader, currentPage, pageLimit} from "../main";

const myAxios = axios.create ({
    baseURL: "https://pixabay.com/api/",
})

export async function getImages() {
    const params = {
        key: "43042645-53d81a66cc18e8ae6a97e5a5a",
        q: query,
        per_page: pageLimit,
        page: currentPage,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: "true",
    };

    showLoader();

    const response = await myAxios.get("", { params })
    return response.data;
};