"use client";

import { DashboardLayout } from "@/components/Layout";

import PostFeed from "./PostFeed";
import { PostsContainer } from "./styles";
import Reactions from "./Reactions";

export function Posts() {
  return (
    <DashboardLayout>
      <PostsContainer>
        <Reactions />
        <PostFeed />
      </PostsContainer>
    </DashboardLayout>
  );
}

export default Posts;
