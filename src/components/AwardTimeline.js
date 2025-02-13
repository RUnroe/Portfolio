import React from "react";

// awards: [
//     {
//         year: number
//         children: ReactNode
//     }
// ]

const AwardTimeline = ({awards}) => {
  const orderedAwards = awards.sort((a, b) => (b.year - a.year));
  return ( 
    <section className="award-timeline">
      {
        orderedAwards.map(({year, children}, index) => (
            <div className="award-item" key={`award-item-${year}-${index}`}>
              <div className="year">{year}</div>
              <p dangerouslySetInnerHTML={{__html: children}}/>
            </div>
        ))
      }
    </section>
  );
}
 
export default AwardTimeline;