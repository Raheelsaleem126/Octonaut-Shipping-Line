interface DataType {
   id: number;
   icon: string;
   number: string;
   title: string;
   desc: JSX.Element;
   shape: string;
}

const work_data: DataType[] = [
  {
    id: 1,
    number: "01",
    icon: "flaticon-package",
    title: "Request a Quote",
    desc: (
      <>Submit your shipping requirements and get a tailored NVOCC solution.</>
    ),
    shape: "/assets/img/images/work_shape01.svg",
  },
  {
    id: 2,
    number: "02",
    icon: "flaticon-support",
    title: "Office Confirmation",
    desc: (
      <>Our team reviews your request and confirms the best route & rates.</>
    ),
    shape: "/assets/img/images/work_shape02.svg",
  },
  {
    id: 3,
    number: "03",
    icon: "flaticon-global-distribution",
    title: "Container Allocation",
    desc: (
      <>Guaranteed space and container availability for your cargo needs.</>
    ),
    shape: "/assets/img/images/work_shape01.svg",
  },
  {
    id: 4,
    number: "04",
    icon: "flaticon-parcel",
    title: "On-Time Delivery",
    desc: (
      <>Cargo is shipped and delivered securely, keeping you updated at every step.</>
    ),
    shape: "/assets/img/images/work_shape01.svg",
  },
];


export default work_data;