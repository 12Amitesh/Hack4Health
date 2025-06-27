
export async function createDoctor(req, res) {
  const { name, department } = req.body
  console.log("hello from doctor")
  try {
    const doctor = await Doctor.create({
      name: name,
      department: department
    });
    res.status(201).json(doctor);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}
