import featuredImage from '../assets/images/featured.png'
import articleImage1 from '../assets/images/article-1.png'
import articleImage2 from '../assets/images/article-2.png'
import articleImage3 from '../assets/images/article-3.png'

const excerpt =
  'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that....'

const details = {
  title: 'Finibus Bonorum et Malorum',
  author: 'John doe',
  date: 'Monday May 20',
  sections: [
    {
      heading: 'Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC',
      text: '"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"',
    },
    {
      heading: '1914 translation by H. Rackham',
      text: '"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"',
    },
  ],
}

export const featuredArticle = {
  id: 1,
  title: 'long established',
  excerpt,
  date: 'May 20th 2020',
  image: featuredImage,
}

export const articles = [
  { id: 2, title: 'long established', excerpt, date: 'May 20th 2020', image: articleImage1, details },
  { id: 3, title: 'long established', excerpt, date: 'May 20th 2020', image: articleImage2, details },
  { id: 4, title: 'long established', excerpt, date: 'May 20th 2020', image: articleImage3, details },
]

export function getArticleById(id) {
  return articles.find((article) => article.id === Number(id))
}
