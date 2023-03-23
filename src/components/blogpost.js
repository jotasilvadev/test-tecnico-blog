import React, { useState, useEffect } from "react";
import { FaCommentDots } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { HiPencilSquare } from "react-icons/hi2";
import {CatImage} from "./catimage"
import Link from "next/link";

function BlogPost() {
    const [posts, setPosts] = useState([]);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => response.json())
            .then((data) => setPosts(data))
            .catch((error) => console.error(error));

        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((data) => setUsers(data))
            .catch((error) => console.error(error));
    }, []);

    function getUserName(userId) {
        const user = users.find((user) => user.id === userId);
        return user ? user.name : "Usuário desconhecido";
    }

    return (
        <div className="flex flex-col gap-2 justify-center items-center mx-2">
            {posts.map((post) => (
                <Post key={post.id} post={post} getUserName={getUserName} />
            ))}
        </div>
    );
}

function Post(props) {
    const [comments, setComments] = useState([]);
    const [showComments, setShowComments] = useState(false);

    function handleShowComments() {
        if (showComments) {
            setShowComments(false);
        } else {
            setShowComments(true);
            fetch(
                `https://jsonplaceholder.typicode.com/posts/${props.post.id}/comments`
            )
                .then((response) => response.json())
                .then((data) => setComments(data))
                .catch((error) => console.error(error));
        }
    }

    return (
        <div className="w-4/5 sm:w-3/4 lg:w-2/4 p-3 m-1 rounded-xl bg-stone-600  shadow-stone-800 shadow-md">
            <h2 className="bg-stone-500 rounded-t-xl text-slate-700 p-3 text-xl uppercase ">
                {props.post.title}
            </h2>
            <div className="bg-stone-400 text-justify rounded-b-xl text-slate-600 flex p-3 items-center gap-x-3">
                <CatImage />
                <p>{props.post.body}</p>
            </div>
            <div className="flex justify-end items-center gap-x-2 text-stone-400">
                <HiPencilSquare />
                <Link href={"/writers"}>
                    <p>{props.getUserName(props.post.userId)}</p>
                </Link>
            </div>

            <button onClick={handleShowComments}>
                <FaCommentDots className="text-stone-800 text-2xl hover:text-slate-300 transition ease-in-out duration-700" />
            </button>
            {showComments && (
                <div>
                    {comments.map((comment) => (
                        <Comment key={comment.id} comment={comment} />
                    ))}
                </div>
            )}
        </div>
    );
}

function Comment(props) {
    return (
        <div className="p-1 text-justify">
            <p className="bg-slate-400 font-mono text-slate-800 p-2 rounded-md">{props.comment.body}</p>
            <p className="lowercase text-stone-400 flex gap-x-2 items-center">
                <AiOutlineMail />
                {props.comment.email}
            </p>
        </div>
    );
}



export { BlogPost };
