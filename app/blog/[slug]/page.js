export default function Post({params}){
    return(
        <main>
            <h1>Post content</h1>
            <p>{params.slug}</p>
        </main>
    )
}