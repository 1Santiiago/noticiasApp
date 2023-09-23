import * as c from "./style";
function CardNoticias({
  title,
  description,
  author,
  image,
  goNews,
  handleClick,
}) {
  return (
    <c.Container>
      <c.Title fontSize="46px" fontWeight="bold">
        {title}
      </c.Title>
      <c.Img src={image} alt="noticia" />
      <c.Paragraph>{description}</c.Paragraph>
      <c.Title textAlign="left">{author}</c.Title>
      <c.Button onClick={()=>handleClick(goNews)}>Read More</c.Button>
    </c.Container>
  );
}

export default CardNoticias;
