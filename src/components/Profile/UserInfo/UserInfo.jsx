function UserInfo(props) {
  return (
    <ul className="text-lg">
      <li>
        <span className="mgc_certificate_fill"></span> {props.name}
      </li>
      <li>
        <span className="mgc_celebrate_fill"></span> {props.job ? "Looking for a job" : "Not looking for a job"}
      </li>
      <li>
        <span className="mgc_github_2_fill"></span> {props.aboutMe ? props.aboutMe : "Not specified"}
      </li>
      <li>
        <span className="mgc_web_fill"></span> {props.website ? props.website : "Not specified"}
      </li>
    </ul>
  );
}

export { UserInfo };
