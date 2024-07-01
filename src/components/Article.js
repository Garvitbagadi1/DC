import React from 'react';
import "./article.css";
import mh from "../assets/mh.avif";
import ReactPlayer from 'react-player';
function Article() {
  return (
    <div >
     <div className="mask">
      
        <img className="into-img"
        src={mh} alt="img not found"/>
         <div className="content">
            <h1 className='head'>We Support 24 hours</h1>
            <br></br>
            <p>Mental health conditions, such as depression or anxiety, are real, common and treatable. And recovery is possible.</p>
          </div>
          
    </div>
    <div className="health-support">
      <h2>Health Guidance and Support</h2>
      <p>
        Welcome to our health guidance and support page. We're here to provide information and resources related to various health issues.
      </p>
      {/* Add sections for different health topics */}
     
      <div className="health-topic">
        <h3>Depression</h3>
        <p>
          If you or someone you know is struggling with depression, it's important to seek help. You can contact a mental health professional or call a crisis hotline.
        </p>
        <div classname="video">
        <ReactPlayer  url="https://youtu.be/X-fAEMgQnt8?feature=shared"/> 
        </div>
        <p>
          <strong>Voice Call</strong> (+123456789)
        </p>
        <p>
          <strong>Chat Connectivity</strong> (+09909900)
        </p>
      </div>

      {/* Health Topic 2: Anxiety */}
      <div className="health-topic">
        <h3>Anxiety</h3>
        <p>
          Anxiety disorders can be challenging, but there are effective treatments available. Consider talking to a mental health expert.
        </p>
        <div classname="video">
        <ReactPlayer  url="https://youtu.be/dknTQktH5Z0?feature=shared"/> 
        </div>
        <p>
          <strong>Voice Call</strong> (+123456789)
        </p>
        <p>
          <strong>Chat Connectivity</strong> (+09909900)
        </p>
      </div>

      {/* Health Topic 3: Substance Abuse */}
      <div className="health-topic">
        <h3>Substance Abuse</h3>
        <p>
          Substance abuse can have serious consequences. Seek assistance from a substance abuse counselor or support group.
        </p>
        <div classname="video">
        <ReactPlayer  url="https://youtu.be/T-6PyUI3yiM?feature=shared"/> 
        </div>
        <p>
          <strong>Voice Call</strong> (+123456789)
        </p>
        <p>
          <strong>Chat Connectivity</strong> (+09909900)
        </p>
      </div>

      {/* Health Topic 4: Eating Disorders */}
      <div className="health-topic">
        <h3>Eating Disorders</h3>
        <p>
          Eating disorders require professional help. Consult with a therapist or nutritionist who specializes in eating disorders.
        </p>
        <div classname="video">
        <ReactPlayer  url="https://youtu.be/aBl6-UTvmn8?feature=shared"/> 
        </div>
        <p>
          <strong>Voice Call</strong> (+123456789)
        </p>
        <p>
          <strong>Chat Connectivity</strong> (+09909900)
        </p>
      </div>

      {/* Health Topic 5: ADHD (Attention-Deficit/Hyperactivity Disorder) */}
      <div className="health-topic">
        <h3>ADHD (Attention-Deficit/Hyperactivity Disorder)</h3>
        <p>
          ADHD can impact daily life. Consider consulting with a mental health professional or psychiatrist for evaluation and guidance.
        </p>
        <div classname="video">
        <ReactPlayer  url="https://youtu.be/5l2RIOhDXvU?feature=shared"/> 
        </div>
        <p>
          <strong>Voice Call</strong> (+123456789)
        </p>
        <p>
          <strong>Chat Connectivity</strong> (+09909900)
        </p>
      </div>

      {/* Add more health topics here */}
      
      {/* Health Topic 6: Bipolar Disorder */}
      <div className="health-topic">
        <h3>Bipolar Disorder</h3>
        <p>
          Bipolar disorder requires medical attention. Consult with a psychiatrist for diagnosis and treatment options.
        </p>
        <div classname="video">
        <ReactPlayer  url="https://youtu.be/G9vkGCo7Gtg?feature=shared"/> 
        </div>
        <p>
          <strong>Voice Call</strong> (+123456789)
        </p>
        <p>
          <strong>Chat Connectivity</strong> (+09909900)
        </p>
      </div>

      {/* Health Topic 7: PTSD (Post-Traumatic Stress Disorder) */}
      <div className="health-topic">
        <h3>PTSD (Post-Traumatic Stress Disorder)</h3>
        <p>
          PTSD can be triggered by traumatic events. Seek help from a mental health professional for therapy and coping strategies.
        </p>
        <div classname="video">
        <ReactPlayer  url="https://youtu.be/2KXtlIX_yUs?feature=shared"/> 
        </div>
        <p>
          <strong>Voice Call</strong> (+123456789)
        </p>
        <p>
          <strong>Chat Connectivity</strong> (+09909900)
        </p>
      </div>

      {/* Health Topic 8: Schizophrenia */}
      <div className="health-topic">
        <h3>Schizophrenia</h3>
        <p>
          Schizophrenia is a serious mental disorder. Consult with a psychiatrist and consider medication as part of treatment.
        </p>
        <div classname="video">
        <ReactPlayer  url="https://youtu.be/PURvJV2SMso?feature=shared"/> 
        </div>
        <p>
          <strong>Voice Call</strong> (+123456789)
        </p>
        <p>
          <strong>Chat Connectivity</strong> (+09909900)
        </p>
      </div>
      
      {/* Health Topic 9: Autism Spectrum Disorder */}
      <div className="health-topic">
        <h3>Autism Spectrum Disorder</h3>
        <p>
          Autism may require early intervention and behavioral therapy. Consult with a pediatrician or autism specialist.
        </p>
        <div classname="video">
        <ReactPlayer  url="https://youtu.be/6jUv3gDAM1E?feature=shared"/> 
        </div>
        <p>
          <strong>Voice Call</strong> (+123456789)
        </p>
        <p>
          <strong>Chat Connectivity</strong> (+09909900)
        </p>
      </div>

      {/* Health Topic 10: Obsessive-Compulsive Disorder (OCD) */}
      <div className="health-topic">
        <h3>Obsessive-Compulsive Disorder (OCD)</h3>
        <p>
          OCD can be managed with therapy and medication. Seek help from a mental health professional specializing in OCD treatment.
        </p>
        <div classname="video">
        <ReactPlayer  url="https://youtu.be/ivyLkTcvanQ?feature=shared"/> 
        </div>
        <p>
          <strong>Voice Call</strong> (+123456789)
        </p>
        <p>
          <strong>Chat Connectivity</strong> (+09909900)
        </p>
      </div>

    </div>
    <div>
      
    </div>
    </div>
  );
}

export default Article;