---
layout: default
title: tamim063
extra_script: |
  <script>
      const LINKS = {
          C4_pdf:      "https://drive.google.com/file/d/15jUwxP4oofPl-x4DsPBstPLn-CBTukHh/view?usp=sharing",
          C3_pdf:      "https://drive.google.com/file/d/1qb5J9FzmqfO04XZfJ6VZyYMjYqc31fyt/view",
          W1_poster:   "https://drive.google.com/file/d/1wieu6UwceExOBWPBwGy0q_0ZAd6I8pIE/view",
          C2_pdf:      "https://drive.google.com/file/d/1vsNjeksu7k23P0kq0ESKeFgUy5m6yuDh/view",
          C2_extended: "https://drive.google.com/file/d/1wflH4P58qPfKLLmh49jX3VHNefIVrsnL/view",
          C2_doi:      "https://doi.org/10.1145/3748636.3764158",
          C2_arxiv:    "https://arxiv.org/abs/2508.08326",
          C1_pdf:      "https://drive.google.com/file/d/1r4VCYoNw6JStCXJ59OBg8VvCOb3gl1Kj/view",
          C1_doi:      "https://doi.org/10.1109/R10-HTC57504.2023.10461782",
          C1_link:     "https://ieeexplore.ieee.org/document/10461782",
      };

      document.querySelectorAll('[data-link]').forEach(a => {
          const key = a.getAttribute('data-link');
          if (LINKS[key]) a.href = LINKS[key];
      });

      document.querySelectorAll('a.pdf-link').forEach(a => {
          a.addEventListener('click', function(e) {
              const href = this.getAttribute('href');
              if (href && href.includes('drive.google.com')) {
                  e.preventDefault();
                  window.open(href, '_blank');
              }
          });
      });
  </script>
---

<div class="pub-wrapper">

    <div class="pub-header-row">
        <h2>Publications</h2>
        <a class="scholar-link"
           href="https://scholar.google.com/citations?user=qk0hMKoAAAAJ&hl=en"
           target="_blank" rel="noopener noreferrer">
            <i class="fas fa-graduation-cap"></i> Google Scholar
        </a>
    </div>

    <p class="pub-legend">
        <span class="my-name">T. Ahmed</span> — underlined bold name denotes myself.<br>
        <strong style="color:#1a8c1a;">[C]</strong> = Conference &nbsp;|&nbsp; <strong style="color:#cc7700;">[W]</strong> = Workshop &nbsp;|&nbsp; Numbers indicate reverse chronological order within each category.
    </p>
    <div class="pub-legend-divider"></div>

    <ul class="pub-list">

        <li class="pub-item">
            <div class="pub-label"><span class="label-id label-conf">[C5]</span></div>
            <div class="pub-content">
                <span class="pub-venue">EMSOFT'26</span>
                <span class="my-name">T. Ahmed</span> and <span class="advisor-name">M. Hasan†</span>,
                "Understanding the Pitfalls of a Differentially Private Fixed-Priority Real-Time Scheduler,"
                <span class="pub-proc">in Proc. of ACM International Conference on Embedded Software (EMSOFT)</span>, 2026.
                <a href="https://monowarhasan.info/papers/RT-DPS_Pitfalls_EMSOFT26.pdf" class="pdf-link" target="_blank" rel="noopener">[PDF]</a>
            </div>
        </li>

        <li class="pub-item">
            <div class="pub-label"><span class="label-id label-conf">[C4]</span></div>
            <div class="pub-content">
                <span class="pub-venue">RTAS'26</span>
                <span class="my-name">T. Ahmed</span>, Z. Hammadeh, D. Lüdtke, and <span class="advisor-name">M. Hasan†</span>,
                "Weakly-Hard Real-Time Flow Scheduling in Time-Sensitive Networks,"
                <span class="pub-proc">in Proc. of the 32nd IEEE Real-Time and Embedded Technology and Applications Symposium (RTAS)</span>, 2026.
                <a data-link="C4_pdf" class="pdf-link" target="_blank" rel="noopener">[PDF]</a>
            </div>
        </li>

        <li class="pub-item">
            <div class="pub-label"><span class="label-id label-conf">[C3]</span></div>
            <div class="pub-content">
                <span class="pub-venue">RTAS-BP'26</span>
                <span class="my-name">T. Ahmed</span> and <span class="advisor-name">M. Hasan†</span>,
                "Work-in-Progress: Queue Assignment and Parameter Selection in TSN Credit-Based Shapers,"
                <span class="pub-proc">in Proc. of IEEE Real-Time and Embedded Technology and Applications Symposium (RTAS) Brief Presentations (BP) track</span>, 2026.
                <a data-link="C3_pdf" class="pdf-link" target="_blank" rel="noopener">[PDF]</a>
            </div>
        </li>

        <li class="pub-item">
            <div class="pub-label"><span class="label-id label-workshop">[W1]</span></div>
            <div class="pub-content">
                <span class="pub-venue">HAIQ'26</span>
                <span class="my-name">T. Ahmed</span>, D. Shen, M. Liu, and <span class="advisor-name">M. Hasan†</span>,
                "A Simplex-Inspired Architecture for Integrating Quantum Capabilities into Cyber-Physical Systems,"
                <span class="pub-proc">2nd Workshop on HPC/AI Integration with Quantum Computing/Networking (HAIQ)</span>, 2026.
                <a data-link="W1_poster" class="pdf-link" target="_blank" rel="noopener">[Poster]</a>
            </div>
        </li>

        <li class="pub-item">
            <div class="pub-label"><span class="label-id label-conf">[C2]</span></div>
            <div class="pub-content">
                <span class="pub-venue">SIGSPATIAL'25</span>
                <span class="my-name">T. Ahmed</span> and <span class="advisor-name">M. Hasan†</span>,
                "Weather-Driven Agricultural Decision-Making under Imperfect Conditions,"
                <span class="pub-proc">in Proc. of the 33rd ACM SIGSPATIAL International Conference on Advances in Geographic Systems</span>, 2025.
                doi: <a data-link="C2_doi" target="_blank" rel="noopener">10.1145/3748636.3764158</a>.
                <a data-link="C2_extended" class="pdf-link" target="_blank" rel="noopener">[Extended Version]</a>
                <a data-link="C2_pdf" class="pdf-link" target="_blank" rel="noopener">[PDF]</a>
                <a data-link="C2_arxiv" class="pdf-link" target="_blank" rel="noopener">[Link]</a>
            </div>
        </li>

        <li class="pub-item">
            <div class="pub-label"><span class="label-id label-conf">[C1]</span></div>
            <div class="pub-content">
                <span class="pub-venue">R10-HTC'23</span>
                F. Siddiqua, <span class="my-name">T. Ahmed</span>, and M. I. Hassan Bhuiyan,
                "Leveraging Gram Matrix Representation in Shallow DNN for GI Tract MRI Image Segmentation,"
                <span class="pub-proc">2023 IEEE 11th Region 10 Humanitarian Technology Conference (R10-HTC)</span>,
                Rajkot, India, 2023, pp. 626–630.
                doi: <a data-link="C1_doi" target="_blank" rel="noopener">10.1109/R10-HTC57504.2023.10461782</a>
                <a data-link="C1_pdf" class="pdf-link" target="_blank" rel="noopener">[PDF]</a>
                <a data-link="C1_link" class="pdf-link" target="_blank" rel="noopener">[Link]</a>
            </div>
        </li>

    </ul>
</div>
