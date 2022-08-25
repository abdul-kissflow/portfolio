import React, { useState } from "react";
import { Container, Row, Carousel } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/ABDULRAGHMAAN_RESUME.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const resumeLink =
  "https://raw.githubusercontent.com/abdul-kissflow/portfolio/main/src/Assets/ABDULRAGHMAAN_RESUME.pdf";

function ResumeNew() {
  // const [width, setWidth] = useState(1200);
  const [numPages, setNumPages] = useState(1);

  // useEffect(() => {
  //   setWidth(window.innerWidth);
  // }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row className="resume">
          <Document file={resumeLink} className="d-flex justify-content-center" onLoadSuccess={({ numPages })=>setNumPages(numPages)}>
            <Carousel fade interval={null} style={{width:"70vw"}}>
              {Array.apply(null, Array(numPages))
                .map((x, i)=>i+1)
                .map(page => 
                  <Carousel.Item key={page} className="d-flex justify-content-center"><Page pageNumber={page} scale={0.6}/></Carousel.Item>
                )}
            </Carousel>
          </Document>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
