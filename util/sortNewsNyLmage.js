export default function sortNewsNyImage(news) {
  const newsWithImage = news.data.filter((item) => item.image !== null);
  const newsWithOutImage = news.data.filter((item) => item.image === null);

  const sortNewsResponse = {
    pagination: news.pagination,
    data: [...newsWithImage, ...newsWithOutImage],
  };

  return sortNewsResponse;
}
