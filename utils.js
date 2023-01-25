const date = new Date();

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

// This arrangement can be altered based on how we want the date's format to appear.
export let currentDate = `${day}-${month}-${year}`;
//  $table->id();
//             $table->string('class');
//             $table->string('determined_fee');
//             $table->string('discount');
//             $table->string('fee_name');
//             $table->string('month');
//             $table->string('order_no');
//             $table->string('receiver');
//             $table->string('student_id');
//             $table->string('student_name');
//             $table->string('submitted_fee');
//             $table->string('date');
//             $table->timestamps();

// protected $fillable = [
//     'class',
//     'determined_fee',
//     'discount',
//     'fee_name',
//     'month',
//     'order_no',
//     'receiver',
//     'student_id',
//     'student_name',
//     'submitted_fee',
//     'date'
// ];

// public function store(Request $request)
// {
//     // return ModelsMonthlyFee2::create();

//     $data = [
//         'class' => $request->class,
//         'determined_fee' => $request->determined_fee,
//         'discount' => $request->discount,
//         'fee_name' => $request->fee_name,
//         'month' => $request->month,
//         'order_no' => $request->order_no,
//         'receiver' => $request->receiver,
//         'student_id' => $request->student_id,
//         'student_name' => $request->student_name,
//         'submitted_fee' => $request->submitted_fee,
//         'date ' => strval($request->date)
//     ];

//     return ModelsMonthlyFee2::create($data);
// }
