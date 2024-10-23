import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import RecommendCard from "./RecommendCard";

const Recommends = () => {
    return (
        <div className="my-12">
            <SectionTitle
            heading={'CHEF RECOMMENDS'}
            subHeading={'Should Try'}
            ></SectionTitle>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
            <RecommendCard></RecommendCard>
            <RecommendCard></RecommendCard>
            <RecommendCard></RecommendCard>
            </div>
        </div>
    );
};

export default Recommends;