aa = 1
p a = {
  title: aa == 2 ? "1" : "2"
}

aa = []
10.times do |i|
  a = {
    branch_name: 1,
    branch_number: 1,
    private: i > 4 ? true : false
  }
  aa << a
end
p aa