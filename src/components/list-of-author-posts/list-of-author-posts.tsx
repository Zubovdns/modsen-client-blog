import styles from "./list-of-author-posts.module.scss";
import { ListOfAuthorPostsProps } from "./list-of-author-posts.type";

export const ListOfAuthorPosts = ({ id }: ListOfAuthorPostsProps) => (
  <div className={styles.container}>list-of-author-posts</div>
);
