import { useParams } from "react-router-dom";

const BlogDetail = () => {
    const { slug } = useParams();

    console.log(slug);
    

    return (
        <div>Kadir abimi cok seviom. contact</div>
    )
}

export default BlogDetail;