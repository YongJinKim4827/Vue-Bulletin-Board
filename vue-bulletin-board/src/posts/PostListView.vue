<template>
	<div>
		<h2>게시글 목록</h2>
		<hr class="my-4" />
		<div class="row g-3">
			<div v-for="post in posts" :key="post.id" class="col-4">
				<PostItem
					:title="post.title"
					:content="post.content"
					:created-at="post.createdAt"
					@click="goPage(post.id)"
				></PostItem>
			</div>
		</div>
	</div>
</template>

<script setup>
import PostItem from '@/components/posts/PostItem.vue';
import { ref } from 'vue';
import { getPosts } from '@/api/post';
import { useRouter } from 'vue-router';
const posts = ref([]);
const router = useRouter();
const fetchPost = () => {
	posts.value = getPosts();
};
const goPage = id => {
	// router.push(`/posts/${id}`); //url을 직접 입력해서 사용
	router.push({
		//이름을 사용해서 이동
		name: 'PostDetail',
		params: {
			id,
		},
	});
};

fetchPost();
</script>

<style lang="scss" scoped></style>
