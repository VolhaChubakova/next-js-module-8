import SearchForm from "./components/searchForm/searchForm";
import MovieTile from "./components/movieTile/movieTile";
import SortControl from "./components/sortControl/sortControl";
import getData from "./api/getData";
import './globals.css';
import './page.css';

export default async function Home() {
  const mainGenres = ['ALL', 'DOCUMENTARY', 'COMEDY', 'HORROR', 'CRIME'];
  const options = ['RELEASE DATE', 'TITLE'];  
  const defaultOption = options[0];
  const sortCriterion = defaultOption;
  const movies = await getData();

  return (
        <main >
            <div className='MovieListPage-header'>
                <div className='MovieListPage-addMovieSection'>
                    <span className='MovieListPage-logo'>netflixroulette</span>
                    <button className='MovieListPage-addMoviebutton'>+ ADD MOVIE</button>
                </div>
                <SearchForm/>
            </div>
            <div className='MovieListPage-wrapper'>
                <div className='MovieListPage-menu'>
                    <div>
                        <ul className='MovieListPage-activeGenres' data-testid='movieListPage-genresTab'>
                            {mainGenres.map((item) =>
                                <li key={item} className={(item=== 'ALL'? ('MovieListPage-activeGenresItem'):'')}>
                                    {item}
                                </li>
                            )}
                        </ul>
                    </div>
                    <SortControl options={options} key={sortCriterion}/>
                </div>
                <p><span className='MovieListPage-totalAmount'>{movies.data.length}</span> movies found</p>
                <div className='MovieListPage-generalInfo'>
                    <div className='MovieListPage-movieItems'>
                        {movies? (
                            movies.data.map((item)=> {
                                return  (
                                    <MovieTile key={item.id} movieInfo={{
                                        imageUrl:item.poster_path,
                                        name: item.title,
                                        releaseYear:item.release_date.slice(0,4),
                                        genres:item.genres,
                                        id:item.id}}
                                    />
                                )
                            })
                        ):(<></>)}
                    </div>
                </div>
            </div>
            <div className='MovieListPage-footer'>netflixroulette</div>
        </main>
  )
}
