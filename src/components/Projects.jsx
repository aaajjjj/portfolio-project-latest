import React from "react";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import GitHubIcon from "@mui/icons-material/GitHub";
import NewsletterPreview from "../media/newsletter_preview.png";
import HackAwayHungerSchema from "../media/hack_away_hunger_schema.png";
import mask_nomask from "../media/mask_nomask.png";
import Covid_Iowa from "../media/Covid_Iowa.JPG";

const cardSx = { maxWidth: 345, margin: 1, minWidth: "33%" };

export default function Projects() {
  return (
    <div className="allheader" id="project">
      <h2 className="timeline_header">Projects</h2>
      <div className="card_container">

        {/* 1 — AI Newsletter Agent */}
        <Card sx={cardSx}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="AI Engineering Digest newsletter preview"
              height="240"
              image={NewsletterPreview}
              title="AI Engineering Digest"
            />
            <CardContent>
              <Typography gutterBottom variant="h3" component="h3">
                AI Engineering Digest
              </Typography>
              <Typography variant="body2" color="text.primary" component="div" id="style_tasks">
                An autonomous LLM pipeline that ingests RSS content, summarizes
                via the OpenAI API, and delivers a curated daily digest to
                subscribers.
                <ul>
                  <li>RAG-based semantic deduplication with vector embeddings to filter redundant content across issues.</li>
                  <li>Modular architecture separating ingestion, model invocation, and delivery for easy extension.</li>
                  <li>Planning agentic evaluation workflows with LangGraph to score summary relevance and detect model drift.</li>
                  <li>Scheduled via GitHub Actions for automated daily runs.</li>
                </ul>
                <strong>Tech:</strong> Python, OpenAI API, LangGraph, Vector DB, RAG, GitHub Actions
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary" disabled>
              Private repo
            </Button>
          </CardActions>
        </Card>

        {/* 2 — Hack Away Hunger */}
        <Card sx={cardSx}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Hack Away Hunger — 13-table DynamoDB data model"
              height="240"
              image={HackAwayHungerSchema}
              title="Hack Away Hunger — DMARC Food Pantry Platform"
            />
            <CardContent>
              <Typography gutterBottom variant="h3" component="h3">
                Hack Away Hunger
              </Typography>
              <Typography variant="body2" color="text.primary" component="div" id="style_tasks">
                DSMHack 2026 — 48-hour charity hackathon presented by Corteva
                Agriscience, focused on food insecurity across Greater Des Moines
                (400K+ Iowans affected).
                <ul>
                  <li>
                    <strong>Problem:</strong> DMARC pantries had no cross-pantry
                    visibility — families rode DART buses for hours only to find
                    empty shelves, and people could visit multiple pantries with no
                    eligibility checks. DMARC pays $120K/yr for proprietary software
                    they can't modify or query.
                  </li>
                  <li>
                    <strong>Solution:</strong> Merged 3 overlapping teams around a
                    single centralized platform — real-time inventory with barcode
                    scanning, cross-pantry household eligibility tracking, donation
                    tracking (food + money), and community fridge QR check-ins.
                  </li>
                  <li>
                    <strong>My contribution:</strong> Designed the centralized data
                    model (13 DynamoDB tables) and built the API layer for any team
                    in the hack to consume — Organizations, Locations, Households,
                    InventoryBalances, InventoryMovements, Checkouts, Transfers,
                    Receipts, and more.
                  </li>
                  <li>Final showcase: Oct 10, 2026. UI link coming post-presentation.</li>
                </ul>
                <strong>Tech:</strong> DynamoDB, AWS Lambda, API design, data modeling
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary" disabled>
              Final showcase Oct 10
            </Button>
          </CardActions>
        </Card>

        {/* 3 — DSMHack previous editions */}
        <Card sx={cardSx}>
          <CardActionArea>
            <Box
              sx={{
                height: 240,
                background: "linear-gradient(135deg, #1a237e 0%, #283593 60%, #0d47a1 100%)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 1,
                padding: 2,
              }}
            >
              <Typography variant="h4" sx={{ color: "white", fontWeight: "bold", textAlign: "center" }}>
                DSMHack
              </Typography>
              <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.8)", textAlign: "center" }}>
                2025 · Des Moines Charity Hackathon
              </Typography>
            </Box>
            <CardContent>
              <Typography gutterBottom variant="h3" component="h3">
                DSMHack — Civic Tech
              </Typography>
              <Typography variant="body2" color="text.primary" component="div" id="style_tasks">
                Earlier DSMHack editions shipping real applications for local
                non-profits in 24 hours with a team of strangers.
                <ul>
                  <li>
                    <strong>Hope to Shine (2025):</strong> Built a fully accessible
                    site for a non-profit supporting refugee women — Google Translate
                    for multilingual access, seminar listings, volunteer and donation
                    pathways, mobile-friendly navigation.{" "}
                    <a href="https://www.hopetoshineia.org/" target="_blank" rel="noreferrer">hopetoshineia.org ↗</a>
                  </li>
                  <li>
                    <strong>Des Moines Street Collective (2026):</strong> Redesigned
                    a bike rental and events company's outdated site — Shopify POS
                    integration, event management, real-time inventory, donation
                    links, and a modern accessible UI.{" "}
                    <a href="https://dsmstreetcollective.org/" target="_blank" rel="noreferrer">dsmstreetcollective.org ↗</a>
                  </li>
                </ul>
                <strong>Tech:</strong> WordPress, Shopify POS, Google Translate API, JavaScript, PHP
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        {/* 4 — Face Mask Detector */}
        <Card sx={cardSx}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Face Mask Detector"
              height="240"
              image={mask_nomask}
              title="Face Mask Detector"
            />
            <CardContent>
              <Typography gutterBottom variant="h3" component="h3">
                Face Mask Detector
              </Typography>
              <Typography variant="body2" color="text.primary" component="div" id="style_tasks">
                A real-time face mask detection system built during independent
                study in machine learning.
                <ul>
                  <li>Trained a CNN on a custom dataset of masked/unmasked faces using Keras and TensorFlow.</li>
                  <li>Real-time detection via webcam with bounding box overlays and confidence scores using OpenCV.</li>
                  <li>Desktop GUI built with PyQt5 for live interaction.</li>
                </ul>
                <strong>Tech:</strong> Python, TensorFlow, Keras, OpenCV, PyQt5
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              <GitHubIcon onClick={() => window.open("https://github.com/ajalrc/mask_detection")} />
            </Button>
          </CardActions>
        </Card>

        {/* 5 — COVID Locator */}
        <Card sx={cardSx}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="COVID Locator Iowa"
              height="240"
              image={Covid_Iowa}
              title="COVID Locator"
            />
            <CardContent>
              <Typography gutterBottom variant="h3" component="h3">
                COVID Locator
              </Typography>
              <Typography variant="body2" color="text.primary" component="div" id="style_tasks">
                A data visualization dashboard for tracking COVID-19 rates
                across Iowa counties.
                <ul>
                  <li>Mapped infection and recovery data for Iowa counties using GeoPandas and shapefiles.</li>
                  <li>Built an interactive Django web app with filters for region and county-level drill-down.</li>
                  <li>Integrated Matplotlib charts alongside map overlays for trend analysis.</li>
                </ul>
                <strong>Tech:</strong> Python, Django, GeoPandas, Matplotlib
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              <GitHubIcon onClick={() => window.open("https://github.com/ajalrc/iowa_covid19_cases")} />
            </Button>
          </CardActions>
        </Card>

      </div>
    </div>
  );
}
