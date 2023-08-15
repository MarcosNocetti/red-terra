import React, { useEffect, useState } from "react";
import DOMPurify from "dompurify";
import { RedCartaDropdownContainer } from "./styled";
import { motion } from "framer-motion";
import { scroller } from "react-scroll";

const months = {
  en: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  br: [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ],
};

export function RedCartaDropdown({ redCartas, selectedRedCarta = null }) {
  const [redCarta, setRedCarta] = useState(Number(selectedRedCarta));

  useEffect(() => {
    if (redCarta) {
      setTimeout(() => {
        scroller.scrollTo(selectedRedCarta, {
          duration: 500,
          smooth: true,
        });
      }, 1);
    }
  }, []);

  useEffect(() => {
    if (redCarta !== null) {
      scroller.scrollTo(redCarta, {
        duration: 500,
        smooth: true,
      });
    }
  }, [redCarta]);

  function formtHeaderTitle(redCarta) {
    if (!redCarta || !redCarta?.monthYear) {
      return "Date information not available.";
    }

    const monthYearParts = redCarta?.monthYear.split(" ");
    if (monthYearParts.length !== 2) {
      return "Invalid date format.";
    }

    const [month, year] = monthYearParts;
    const language = redCarta?.language || "en";
    const monthIndex = months["en"].indexOf(month);

    if (monthIndex === -1) {
      return "Month information not available for the selected language.";
    }

    return months[language][monthIndex] + " " + year;
  }

  function previousRedCarta() {
    setRedCarta((prevState) =>
      prevState < redCartas.length - 1 ? redCartas[++prevState].id : 0
    );
  }

  function sanitezedData(text) {
    const styles = `
      width: 100%;
      margin: 0;
      padding: 50px 0 80px;
      font-weight: 300;
      font-size: 22px;
      line-height: 30px;
      color: #fff;
      font-family: 'Public Sans';
    `;
    const firstParagraphStart = text.indexOf("<p>");
    const firstParagraphEnd = text.indexOf("</p>", firstParagraphStart) + 4;

    const firstParagraph = text.slice(firstParagraphStart, firstParagraphEnd);

    const styledParagraph = `<p style="${styles}">${firstParagraph.slice(
      3,
      -4
    )}</p>`;

    return DOMPurify.sanitize(text.replace(firstParagraph, styledParagraph));
  }

  return redCartas.map((r, i) => (
    <RedCartaDropdownContainer key={r.id}>
      <header
        onClick={() => {
          setRedCarta((prevState) => (prevState === r.id ? null : r.id));
        }}
      >
        <div>
          <h1>{r.monthYear && formtHeaderTitle(r)}</h1>
        </div>
      </header>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: r.id === redCarta ? "auto" : 0,
          opacity: r.id === redCarta ? 1 : 0,
        }}
        exit={{ height: 0, opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        style={{ overflow: "hidden" }}
      >
        {r.id === redCarta && (
          <>
            <div>
              <div>
                <h1>{r.title}</h1>
              </div>
              <img id={r.id} src={r.imageUrl} alt={r.title} />
            </div>
            <div>
              <p
                style={{ color: "red !important" }}
                dangerouslySetInnerHTML={{
                  __html: sanitezedData(r.text),
                }}
              ></p>
              {i < redCartas.length - 1 && (
                <button type="button" onClick={previousRedCarta}>
                  {r.language === "en"
                    ? "Previous Red Carta"
                    : "Red Carta anterior"}
                </button>
              )}
            </div>
          </>
        )}
      </motion.div>
    </RedCartaDropdownContainer>
  ));
}
