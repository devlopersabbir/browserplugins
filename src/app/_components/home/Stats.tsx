import { Extension } from "@/@types";

type Props = {
  extensions: Extension[];
};
export default function Stats({ extensions }: Props) {
  return (
    <section className="relative py-24 px-6 bg-background">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="bg-card/10 backdrop-blur-2xl rounded-3xl p-12 border border-border">
            <div className="grid md:grid-cols-4 gap-12 text-center">
              <div className="group">
                <div className="text-5xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform duration-300">
                  50K+
                </div>
                <div className="text-muted-foreground text-lg font-medium">
                  Happy Users
                </div>
              </div>
              <div className="group">
                <div className="text-5xl font-black bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform duration-300">
                  {extensions.length}
                </div>
                <div className="text-muted-foreground text-lg font-medium">
                  Premium Extensions
                </div>
              </div>
              <div className="group">
                <div className="text-5xl font-black bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform duration-300">
                  4.8★
                </div>
                <div className="text-muted-foreground text-lg font-medium">
                  Average Rating
                </div>
              </div>
              <div className="group">
                <div className="text-5xl font-black bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform duration-300">
                  24/7
                </div>
                <div className="text-muted-foreground text-lg font-medium">
                  Support
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
