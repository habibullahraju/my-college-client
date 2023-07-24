import GallerySection from "../../GallerySection/GallerySection";
import ReserachPaper from "../../ReserachPaper/ReserachPaper";
import SearchSection from "../SearchSection/SearchSection";
import ThreeCollegeSection from "../ThreeCollegeSection/ThreeCollegeSection";


const Home = () => {
    return (
        <div>
            <SearchSection></SearchSection>
            <ThreeCollegeSection></ThreeCollegeSection>
            <GallerySection></GallerySection>
            <ReserachPaper></ReserachPaper>
            
        </div>
    );
};

export default Home;

