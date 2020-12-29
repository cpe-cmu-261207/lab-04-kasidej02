export const CourseCard = (props) => {
  // TODO: design HTML component that displays a course as a "card" on the webpage.

  return (
  <div className="bg-blue-300 p-5 rounded-3xl m-3">
      <td>
        <div>
          <h3>วิชา : {props.vname}</h3>
          <h3>รหัสวิชา : {props.vcode}</h3>
          <h3>หน่วยกิจ : {props.vcredit}</h3>
          <h3>เกรด : {props.vgrade}</h3>
        </div>
      </td>
      <td>
        <span class="container ml-5">
        <button className="m-full inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-red-500 rounded-full shadow ripple hover:shadow-lg hover:bg-red-600 focus:outline-none" onClick = {() => {
          props.del(props.vname)
        }}><i class="far fa-trash-alt"></i></button>
        </span>
      </td>
    </div>
  );
};