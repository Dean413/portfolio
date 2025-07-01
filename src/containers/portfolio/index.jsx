import { BsInfoCircleFill } from "react-icons/bs";
import PageHeader from "../../components/pageHeader";
import "./styles.scss";
import { useState } from "react";

const projects = [
  {
    id: 1,
    name: "E-Library Website",
    image: "https://images.unsplash.com/photo-1581092334799-94d3b6c5be1f?auto=format&fit=crop&w=800&q=80",
    category: "Web Development",
    demo: "https://example.com/e-library",
  },
  {
    id: 2,
    name: "Real Estate Listing App",
    image: "https://images.unsplash.com/photo-1599423300746-b62533397364?auto=format&fit=crop&w=800&q=80",
    category: "Web Development",
    demo: "https://example.com/real-estate",
  },
  {
    id: 3,
    name: "Mobile Banking App",
    image: "https://images.unsplash.com/photo-1605902711622-cfb43c4437d2?auto=format&fit=crop&w=800&q=80",
    category: "Mobile Development",
    demo: "https://example.com/mobile-banking",
  },
  {
    id: 4,
    name: "Crypto Dashboard",
    image: "https://images.unsplash.com/photo-1611971260502-0d9d4348cd70?auto=format&fit=crop&w=800&q=80",
    category: "Web Development",
    demo: "https://example.com/crypto-dashboard",
  },
  {
    id: 5,
    name: "E-Commerce App",
    image: "https://images.unsplash.com/photo-1556742031-c6961e8560b0?auto=format&fit=crop&w=800&q=80",
    category: "Mobile Development",
    demo: "https://example.com/ecommerce",
  },
];

const filterOptions = [
  { filterId: 1, label: "All" },
  { filterId: 2, label: "Web Development" },
  { filterId: 3, label: "Mobile Development" },
];

const Portfolio = () => {
  const [filteredValue, setFilteredValue] = useState(1);

  const handleFilterId = (id) => {
    setFilteredValue(id);
  };

  const filteredProjects =
    filteredValue === 1
      ? projects
      : projects.filter(
          (project) =>
            project.category ===
            filterOptions.find((opt) => opt.filterId === filteredValue)?.label
        );

  return (
    <section id="portfolio" className="portfolio py-5">
      <PageHeader
        headerText="Portfolio"
        icon={<BsInfoCircleFill size={40} />}
      />

      <div className="porfolio-content container">
        {/* Filter Tabs */}
        <ul className="portfolio-filter d-flex gap-3 mb-4 list-unstyled justify-content-center mt-2">
          {filterOptions.map((filter) => (
            <li
              key={filter.filterId}
              onClick={() => handleFilterId(filter.filterId)}
              className={`filter-tab ${
                filteredValue === filter.filterId ? "active" : ""
              }`}
              style={{
                cursor: "pointer",
                fontWeight: "bold",
                color: filteredValue === filter.filterId ? "white" : "#ff0000",
              }}
            >
              {filter.label}
            </li>
          ))}
        </ul>

        {/* Projects Grid */}
        <div className="row g-4">
          {filteredProjects.map((project) => (
            <div className="col-md-6 col-lg-4" key={project.id}>
              <div className="card shadow-sm h-100">
                <img
                  src={project.image}
                  className="card-img-top object-fit-cover"
                  alt={project.name}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title" style={{color: "red"}}>{project.name}</h5>
                  <p className="card-text text-muted mb-3"  style={{color: "red"}}>{project.category}</p>
                  <a
                    href={project.demo}
                    className="btn demo-button mt-auto"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}

          {filteredProjects.length === 0 && (
            <p className="text-center text-muted">No projects to show.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
