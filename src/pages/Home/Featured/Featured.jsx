import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import featuredImg from '../../../assets/home/featured.jpg';
import './Featured.css';

const Featured = () => {
    return (
        <div className='featured-item text-white pt-12 my-20 bg-fixed'>
           <SectionTitle
           subHeading={'Check it out'}
           heading={'From our menu'}
           ></SectionTitle> 
           <div className='md:flex justify-center bg-slate-500 bg-opacity-40 items-center gap-6 pb-20 pt-12 px-36'>
           <div>
            <img src={featuredImg} alt="" />
           </div>
           <div className='space-y-4'>
            <p>October 22, 2024</p>
            <p className='uppercase'>Where can i get some?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quae vel unde non ut quidem, quisquam fuga voluptatum consequuntur earum fugiat saepe dignissimos explicabo impedit reprehenderit id officia exercitationem modi! Minima quas, aspernatur autem maiores possimus ea sapiente doloremque suscipit quam obcaecati vel sunt cum laborum! Perspiciatis fugiat rerum mollitia.</p>
            <button className='btn btn-outline border-0 border-b-4'>Order Now</button>
           </div>
           </div>
        </div>
    );
};

export default Featured;