import { motion } from "framer-motion";

import { Myworkspace } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { cn } from "../utils/lib";
import { fadeIn, textVariant } from "../utils/motion";

type FeedbackCardProps = {
  index: number;
  myworkspace: string;
  name: string;
  designation: string;
  
};

// Feedback Card
const FeedbackCard = ({
  index,
  myworkspace,
  name,
  designation,
  
}: FeedbackCardProps) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
  >
    {/* Quote " */}
    <p className="text-white font-black text-[48px]">"</p>

    <div className="mt-1">
      {/* Testimonial */}
      <p className="text-white tracking-wider text-[18px]">{myworkspace}</p>

      <div className="mt-7 flex justify-between items-center gap-1">
        <div className="flex-1 flex flex-col">
          {/* Name */}
          <p className="text-white font-medium text-[16px]">
            <span className="blue-text-gradient">@</span> {name}
          </p>
          
        </div>


        {/* User Image */}
        
      </div>
    </div>
  </motion.div>
);

// Feedbacks
export const Feedbacks = () => {
  return (
    <SectionWrapper>
      <div className="mt-12 bg-black-100 rounded-[20px]">
        <div
          className={cn(
            styles.padding,
            "bg-tertiary rounded-2xl min-h-[300px]"
          )}
        >
          {/* Title */}
          <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>What others say</p>
            <h2 className={styles.sectionHeadText}>My Workspace Specification.</h2>
          </motion.div>
        </div>

        {/* Feedback Card */}
        <div
          className={cn(styles.paddingX, "-mt-20 pb-14 flex flex-wrap gap-7")}
        >
          {Myworkspace.map((myworkspace, i) => (
            <FeedbackCard key={myworkspace.name} index={i} {...myworkspace} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};
