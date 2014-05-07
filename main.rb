Dir.glob(File.expand_path('../xtop_*.rb', __FILE__)).each { |f| require f }

file = `pwd`.chomp + "/.xtop.rb"

Thread.abort_on_exception = true

if File.exists?(file)
  view = XtopView.new(eval(File.read(file)))
elsif File.exists?(File.expand_path("~/.xtop.rb"))
  view = XtopView.new(eval(File.read(File.expand_path("~/.xtop.rb"))))
else
  exit(0) # need .xtop.rb file
end

XtopLoop.start(view) do |key|
  case key
  when "q"
    exit(0)
  when "r"
    view.update_status("google.com", "red")
  end
end
