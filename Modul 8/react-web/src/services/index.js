import GetAPI from "./Get";
import PostAPI from "./Post";
import DeleteAPI from "./Delete";

// const getNewBlog = () => GetAPI('posts?_sort=id&_order=desc');
// const postNewBlog = (dataYgDikirim) => PostAPI('posts', dataYgDikirim);
// const deleteNewBlog = (dataYgDihapus) => DeleteAPI('posts', dataYgDihapus);

const getNewMhs = () => GetAPI('mahasiswa?_sort=id&_order=desc');
const postNewMhs = (dataYgDikirim) => PostAPI('mahasiswa', dataYgDikirim);
const deleteNewMhs = (dataYgDihapus) => DeleteAPI('mahasiswa', dataYgDihapus);

const API = {
    getNewMhs,
    postNewMhs,
    deleteNewMhs
}

export default API;